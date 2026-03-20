import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Booking } from './booking.entity';
import { Rating } from './rating.entity';

export enum ListenerStatus {
    PENDING = 'pending',
    APPROVED = 'approved',
    REJECTED = 'rejected',
}

@Entity('listeners')
export class Listener {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => User, (user) => user.listener_profile)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ name: 'user_id' })
    userId: string;

    @Column({ type: 'text' })
    bio: string;

    @Column()
    experience: string;

    @Column('simple-array')
    languages: string[];

    @Column({
        type: 'enum',
        enum: ListenerStatus,
        default: ListenerStatus.PENDING,
    })
    status: ListenerStatus;

    @Column({ type: 'decimal', precision: 3, scale: 2, default: 0 })
    rating: number;

    @OneToMany(() => Booking, (booking) => booking.listener)
    bookings: Booking[];

    @OneToMany(() => Rating, (rating) => rating.listener)
    ratings: Rating[];
}
