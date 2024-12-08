import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Category } from './category.entity';
import { Subcategory } from '../entities/subcategory.entity';
import { Files } from './files.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn() // Unique identifier for the product. It's auto-generated number.
  id: number;

  @Column({ type: 'varchar', length: 255 }) // Name of the product.
  name: string;

  @Column({ type: 'text' }) // Detailed description.
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 }) // Price with decimal precision.
  price: number;

  @ManyToOne(() => Category, (category) => category.products, {
    nullable: false,
  }) // Foreign key to categories.
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @ManyToOne(() => Subcategory, (subcategory) => subcategory.products, {
    nullable: true,
  }) // Foreign key to subcategories.
  @JoinColumn({ name: 'subcategory_id' })
  subcategory: Subcategory;

  @Column({ type: 'varchar', length: 255, nullable: true }) // file name.
  image_url?: string;

  @Column({ type: 'boolean', default: true }) // Active state of the product.
  is_active: boolean;

  @CreateDateColumn({ type: 'timestamp' }) // Timestamp when the product was created.
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' }) // Timestamp when the product was updated.
  updated_at: Date;

  @Column({ type: 'decimal', precision: 3, scale: 2, default: 0 }) // Average rating out of 5.
  rating_avg: number;

  @Column({ type: 'int', default: 0 }) // Count of ratings/reviews.
  rating_count: number;

  @Column({ type: 'varchar', length: 255, nullable: true }) // Preview URL.
  preview_url?: string;

  // One-to-Many relationship with files (a product can have multiple files)
  @OneToMany(() => Files, (file) => file.product)
  files: File[];
}
