import { IsString, IsNotEmpty, IsNumber, Min, Max, IsOptional } from 'class-validator';

export class CreateRatingDto {
    @IsString()
    @IsNotEmpty()
    listenerId: string;

    @IsString()
    @IsNotEmpty()
    sessionId: string;

    @IsNumber()
    @Min(1)
    @Max(5)
    rating: number;

    @IsString()
    @IsOptional()
    review?: string;
}
