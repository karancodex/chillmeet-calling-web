import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking, BookingStatus } from '../../database/entities/booking.entity';
import { CreateBookingDto } from './dto/booking.dto';

@Injectable()
export class BookingsService {
    constructor(
        @InjectRepository(Booking)
        private bookingRepository: Repository<Booking>,
    ) { }

    async create(seekerId: string, createDto: CreateBookingDto) {
        const booking = this.bookingRepository.create({
            seekerId,
            ...createDto,
            status: BookingStatus.SCHEDULED,
        });
        return this.bookingRepository.save(booking);
    }

    async findAll(userId: string, role: string) {
        if (role === 'admin') {
            return this.bookingRepository.find({ relations: ['seeker', 'listener', 'listener.user'] });
        }
        if (role === 'listener') {
            // Find listener record first
            return this.bookingRepository.find({
                where: { listener: { user: { id: userId } } },
                relations: ['seeker', 'listener', 'listener.user'],
            });
        }
        return this.bookingRepository.find({
            where: { seekerId: userId },
            relations: ['seeker', 'listener', 'listener.user'],
        });
    }

    async findOne(id: string) {
        const booking = await this.bookingRepository.findOne({
            where: { id },
            relations: ['seeker', 'listener', 'listener.user'],
        });
        if (!booking) {
            throw new NotFoundException('Booking not found');
        }
        return booking;
    }
}
