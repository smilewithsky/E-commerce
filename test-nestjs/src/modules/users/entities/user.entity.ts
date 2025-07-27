import { Address } from 'src/modules/addresses/entities/address.entity';
import { Review } from 'src/modules/reviews/entities/review.entity';
import { Wishlist } from 'src/modules/wishlists/entities/wishlist.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  role: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // product.entity.ts
  @OneToMany(() => Wishlist, (wishlist) => wishlist.user)
  wishlistItems: Wishlist[];

  @OneToMany(() => Review, (Review) => Review.user)
  reviews: Review[];

  @OneToMany(() => Address, (addresses) => addresses.user)
  addresses: Address[];
}
