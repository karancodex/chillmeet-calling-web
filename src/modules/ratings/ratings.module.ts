import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingsService } from './ratings.service';
import { RatingsController } from './ratings.controller';
import { Rating } from '../../database/entities/rating.entity';
import { Listener } from '../../database/entities/listener.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Rating, Listener])],
    controllers: [RatingsController],
    providers: [RatingsService],
})
export class RatingsModule { }
