import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rating } from '../../database/entities/rating.entity';
import { Listener } from '../../database/entities/listener.entity';
import { CreateRatingDto } from './dto/rating.dto';

@Injectable()
export class RatingsService {
    constructor(
        @InjectRepository(Rating)
        private ratingRepository: Repository<Rating>,
        @InjectRepository(Listener)
        private listenerRepository: Repository<Listener>,
    ) { }

    async create(seekerId: string, createDto: CreateRatingDto) {
        const rating = this.ratingRepository.create({
            seekerId,
            ...createDto,
        });

        await this.ratingRepository.save(rating);

        // Update average rating for listener
        const ratings = await this.ratingRepository.find({
            where: { listenerId: createDto.listenerId },
        });

        const averageRating = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;

        await this.listenerRepository.update(createDto.listenerId, {
            rating: averageRating,
        });

        return rating;
    }
}
