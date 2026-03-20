import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { CreateRatingDto } from './dto/rating.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('ratings')
export class RatingsController {
    constructor(private readonly ratingsService: RatingsService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Request() req: any, @Body() createDto: CreateRatingDto) {
        return this.ratingsService.create(req.user.id, createDto);
    }
}
