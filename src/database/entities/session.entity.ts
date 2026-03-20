import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Booking } from './booking.entity';
import { Rating } from './rating.entity';

export enum SessionStatus {
    INITIALIZED = 'initialized',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    FAILED = 'failed',
}

@Entity('sessions')
export class Session {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Booking, (booking) => booking.session)
    @JoinColumn({ name: 'booking_id' })
    booking: Booking;

    @Column({ name: 'booking_id' })
    bookingId: string;

    @Column({ type: 'timestamp', nullable: true })
    start_time: Date;

    @Column({ type: 'timestamp', nullable: true })
    end_time: Date;

    @Column()
    duration: number;

    @Column({
        type: 'enum',
        enum: SessionStatus,
        default: SessionStatus.INITIALIZED,
    })
    status: SessionStatus;

    @OneToMany(() => Rating, (rating) => rating.session)
    ratings: Rating[];
}
