// wishlist.entity.ts
import { Product } from 'src/modules/products/entities/product.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Unique, CreateDateColumn } from 'typeorm';

@Entity('wishlists')
@Unique(['user', 'product']) // Đảm bảo không trùng user + product
export class Wishlist {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.wishlistItems, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Product, (product) => product.wishlistedBy, { onDelete: 'CASCADE' })
  product: Product;

  @CreateDateColumn()
  created_at: Date;
}
