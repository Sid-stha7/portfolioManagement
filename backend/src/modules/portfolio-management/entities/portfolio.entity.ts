import { DATABASE_TABLES } from 'src/constants/database.enum';

import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Portfolio {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at?: Date;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 15, scale: 2 })
  totalValue: number;

  @Column({ type: 'decimal', precision: 15, scale: 2 })
  dayGain: number;

  @Column({ type: 'decimal', precision: 15, scale: 2 })
  unrealisedGain: number;

  @Column({ type: 'decimal', precision: 15, scale: 2 })
  realisedGain: number;

  @Column({ type: 'decimal', precision: 15, scale: 2 })
  famValue: number;

  @Column({ type: 'decimal', precision: 15, scale: 2 })
  meroValue: number;
}
