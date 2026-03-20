import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { AccessToken } from 'livekit-server-sdk';
import { Session, SessionStatus } from '../../database/entities/session.entity';
import { Booking, BookingStatus } from '../../database/entities/booking.entity';

@Injectable()
export class SessionsService {
    constructor(
        @InjectRepository(Session)
        private sessionRepository: Repository<Session>,
        @InjectRepository(Booking)
        private bookingRepository: Repository<Booking>,
        private configService: ConfigService,
    ) { }

    async startSession(bookingId: string, userId: string) {
        const booking = await this.bookingRepository.findOne({ where: { id: bookingId } });
        if (!booking) {
            throw new NotFoundException('Booking not found');
        }

        if (booking.status !== BookingStatus.SCHEDULED && booking.status !== BookingStatus.IN_PROGRESS) {
            throw new BadRequestException('Booking is not in a startable state');
        }

        let session: Session | null = await this.sessionRepository.findOne({ where: { bookingId } });
        const isListener = booking.listenerId === userId;

        if (!session) {
            const newSession = this.sessionRepository.create({
                bookingId,
                duration: booking.duration,
                status: isListener ? SessionStatus.IN_PROGRESS : SessionStatus.INITIALIZED,
                start_time: isListener ? new Date() : undefined,
            } as any);
            session = await this.sessionRepository.save(newSession) as any;
        } else if (isListener && session.status === SessionStatus.INITIALIZED) {
            session.status = SessionStatus.IN_PROGRESS;
            session.start_time = new Date();
            session = await this.sessionRepository.save(session) as any;
        }

        if (!session) {
            throw new BadRequestException('Failed to initialize session');
        }

        // If it was scheduled and we just started it, update booking status
        if (session.status === SessionStatus.IN_PROGRESS && booking.status === BookingStatus.SCHEDULED) {
            booking.status = BookingStatus.IN_PROGRESS;
            await this.bookingRepository.save(booking);
        }

        return { session, listenerId: booking.listenerId };
    }

    async generateToken(roomName: string, participantName: string) {
        const apiKey = this.configService.get<string>('LIVEKIT_API_KEY');
        const apiSecret = this.configService.get<string>('LIVEKIT_API_SECRET');

        const at = new AccessToken(apiKey, apiSecret, {
            identity: participantName,
        });

        at.addGrant({
            roomJoin: true,
            room: roomName,
            canPublish: true,
            canSubscribe: true,
            canPublishData: true,
        });

        return at.toJwt();
    }

    async endSession(sessionId: string) {
        const session = await this.sessionRepository.findOne({ where: { id: sessionId }, relations: ['booking'] });
        if (!session) {
            throw new NotFoundException('Session not found');
        }

        session.status = SessionStatus.COMPLETED;
        session.end_time = new Date();
        await this.sessionRepository.save(session);

        session.booking.status = BookingStatus.COMPLETED;
        await this.bookingRepository.save(session.booking);

        return session;
    }

    async getActiveSessions() {
        return this.sessionRepository.find({
            where: { status: SessionStatus.IN_PROGRESS },
            relations: ['booking'],
        });
    }
}
