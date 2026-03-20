import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Session } from './session.entity';
import { Listener } from './listener.entity';
import { User } from './user.entity';

@Entity('ratings')
export class Rating {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Session, (session) => session.ratings)
    @JoinColumn({ name: 'session_id' })
    session: Session;

    @Column({ name: 'session_id' })
    sessionId: string;

    @ManyToOne(() => Listener, (listener) => listener.ratings)
    @JoinColumn({ name: 'listener_id' })
    listener: Listener;

    @Column({ name: 'listener_id' })
    listenerId: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'seeker_id' })
    seeker: User;

    @Column({ name: 'seeker_id' })
    seekerId: string;

    @Column()
    rating: number; // 1-5

    @Column({ type: 'text', nullable: true })
    review: string;
}
