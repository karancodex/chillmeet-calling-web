import { IsString, IsNotEmpty, IsArray, IsOptional } from 'class-validator';

export class ApplyListenerDto {
    @IsString()
    @IsNotEmpty()
    bio: string;

    @IsString()
    @IsNotEmpty()
    experience: string;

    @IsArray()
    @IsString({ each: true })
    languages: string[];
}
