import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListenersService } from './listeners.service';
import { ListenersController } from './listeners.controller';
import { Listener } from '../../database/entities/listener.entity';
import { User } from '../../database/entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Listener, User])],
    controllers: [ListenersController],
    providers: [ListenersService],
    exports: [ListenersService],
})
export class ListenersModule { }
