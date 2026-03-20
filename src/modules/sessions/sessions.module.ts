import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { Session } from '../../database/entities/session.entity';
import { Booking } from '../../database/entities/booking.entity';
import { TimerService } from '../../services/timer.service';
import { RealtimeModule } from '../../realtime/realtime.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Session, Booking]),
        RealtimeModule,
    ],
    controllers: [SessionsController],
    providers: [SessionsService, TimerService],
    exports: [SessionsService],
})
export class SessionsModule { }
