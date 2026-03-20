import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Listener } from './listener.entity';
import { Booking } from './booking.entity';

export enum UserRole {
  SEEKER = 'seeker',
  LISTENER = 'listener',
  ADMIN = 'admin',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column({ select: false })
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.SEEKER,
  })
  role: UserRole;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => Listener, (listener) => listener.user)
  listener_profile: Listener;

  @OneToMany(() => Booking, (booking) => booking.seeker)
  bookings: Booking[];
}
