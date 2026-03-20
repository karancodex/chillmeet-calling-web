import { IsString, IsNotEmpty, IsDateString, IsNumber, IsIn } from 'class-validator';

export class CreateBookingDto {
    @IsString()
    @IsNotEmpty()
    listenerId: string;

    @IsString()
    @IsNotEmpty()
    topic: string;

    @IsDateString()
    @IsNotEmpty()
    scheduled_time: string;

    @IsNumber()
    @IsIn([15, 30, 60])
    duration: number;
}
