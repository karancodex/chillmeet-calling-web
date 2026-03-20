import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from '@nestjs-modules/ioredis';
import { ScheduleModule } from '@nestjs/schedule';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ListenersModule } from './modules/listeners/listeners.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { SessionsModule } from './modules/sessions/sessions.module';
import { RatingsModule } from './modules/ratings/ratings.module';
import { RealtimeModule } from './realtime/realtime.module';

import { User } from './database/entities/user.entity';
import { Listener } from './database/entities/listener.entity';
import { Booking } from './database/entities/booking.entity';
import { Session } from './database/entities/session.entity';
import { Rating } from './database/entities/rating.entity';

import { AppController } from './app.controller';
 
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [User, Listener, Booking, Session, Rating],
        synchronize: true, // Only for development
      }),
    }),
    RedisModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'single',
        url: `redis://${configService.get('REDIS_HOST')}:${configService.get('REDIS_PORT')}`,
      }),
    }),
    ScheduleModule.forRoot(),
    AuthModule,
    UsersModule,
    ListenersModule,
    BookingsModule,
    SessionsModule,
    RatingsModule,
    RealtimeModule,
  ],
  controllers: [AppController],
})
export class AppModule { }
