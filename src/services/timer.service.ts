import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { SessionsService } from '../modules/sessions/sessions.service';
import { SignalingGateway } from '../realtime/signaling.gateway';
import { SessionStatus } from '../database/entities/session.entity';

@Injectable()
export class TimerService {
    private readonly logger = new Logger(TimerService.name);

    constructor(
        private readonly sessionsService: SessionsService,
        private readonly signalingGateway: SignalingGateway,
    ) { }

    @Cron(CronExpression.EVERY_SECOND)
    async handleCron() {
        const activeSessions = await this.sessionsService.getActiveSessions();
        const now = new Date();

        for (const session of activeSessions) {
            const startTime = new Date(session.start_time);
            const endTime = new Date(startTime.getTime() + session.duration * 60000);

            if (now >= endTime) {
                this.logger.log(`Session ${session.id} time reached. Ending session.`);

                // Notify clients via WebSocket
                this.signalingGateway.server.to(session.id).emit('timer:end', {
                    sessionId: session.id,
                    message: 'Session time completed.',
                });

                // End session in DB
                await this.sessionsService.endSession(session.id);

                // Disconnect clients (optional, they should leave on timer:end)
                // But we can force it or emit call:end
                this.signalingGateway.server.to(session.id).emit('call:end', {
                    sessionId: session.id,
                });
            } else {
                // Emit update every second for the UI to tick correctly
                if (session.start_time) {
                    const remainingSeconds = Math.floor((endTime.getTime() - now.getTime()) / 1000);
                    this.signalingGateway.server.to(session.id).emit('timer:update', {
                        sessionId: session.id,
                        remainingSeconds: Math.max(0, remainingSeconds),
                    });
                }
            }
        }
    }
}
