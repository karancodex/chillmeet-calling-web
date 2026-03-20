import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Listener, ListenerStatus } from '../../database/entities/listener.entity';
import { User, UserRole } from '../../database/entities/user.entity';
import { ApplyListenerDto } from './dto/listener.dto';

@Injectable()
export class ListenersService {
    constructor(
        @InjectRepository(Listener)
        private listenerRepository: Repository<Listener>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async apply(userId: string, applyDto: ApplyListenerDto) {
        const existingListener = await this.listenerRepository.findOne({ where: { userId } });
        if (existingListener) {
            throw new ConflictException('Application already submitted');
        }

        const listener = this.listenerRepository.create({
            userId,
            ...applyDto,
            status: ListenerStatus.PENDING,
        });

        return this.listenerRepository.save(listener);
    }

    async findAll() {
        return this.listenerRepository.find({
            where: { status: ListenerStatus.APPROVED },
            relations: ['user'],
        });
    }

    async findOne(id: string) {
        const listener = await this.listenerRepository.findOne({
            where: { id },
            relations: ['user'],
        });
        if (!listener) {
            throw new NotFoundException('Listener not found');
        }
        return listener;
    }

    async approve(id: string) {
        const listener = await this.findOne(id);
        listener.status = ListenerStatus.APPROVED;

        // Also update user role to LISTENER
        const user = await this.userRepository.findOne({ where: { id: listener.userId } });
        if (user) {
            user.role = UserRole.LISTENER;
            await this.userRepository.save(user);
        }

        return this.listenerRepository.save(listener);
    }
}
