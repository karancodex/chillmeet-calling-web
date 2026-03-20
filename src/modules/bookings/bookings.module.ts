import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { Booking } from '../../database/entities/booking.entity';
import { Listener } from '../../database/entities/listener.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Booking, Listener])],
    controllers: [BookingsController],
    providers: [BookingsService],
    exports: [BookingsService],
})
export class BookingsModule { }
