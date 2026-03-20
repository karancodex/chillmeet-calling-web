import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { Listener } from './listener.entity';
import { Session } from './session.entity';

export enum BookingStatus {
    SCHEDULED = 'scheduled',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled',
}

@Entity('bookings')
export class Booking {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, (user) => user.bookings)
    @JoinColumn({ name: 'seeker_id' })
    seeker: User;

    @Column({ name: 'seeker_id' })
    seekerId: string;

    @ManyToOne(() => Listener, (listener) => listener.bookings)
    @JoinColumn({ name: 'listener_id' })
    listener: Listener;

    @Column({ name: 'listener_id' })
    listenerId: string;

    @Column()
    topic: string;

    @Column({ type: 'timestamp' })
    scheduled_time: Date;

    @Column()
    duration: number; // 15, 30, 60

    @Column({
        type: 'enum',
        enum: BookingStatus,
        default: BookingStatus.SCHEDULED,
    })
    status: BookingStatus;

    @OneToOne(() => Session, (session) => session.booking)
    session: Session;
}
