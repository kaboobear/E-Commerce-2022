import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  Generated,
  Unique,
} from 'typeorm';
import { Category } from 'enums/category.enum';
import { Image } from './Image';
import { Color } from './Color';

const PRODUCT_CODE_ORIGIN = 82441;

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true })
  code: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column({ type: 'enum', enum: Category })
  category: Category;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  @ManyToMany(() => Color)
  @JoinTable()
  colors: Color[];

  @OneToMany(() => Image, (image) => image.product)
  images: Image[];

  setProductCode() {
    this.code = PRODUCT_CODE_ORIGIN - this.id;
  }
}
