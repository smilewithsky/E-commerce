import { Brand } from 'src/modules/brands/entities/brand.entity';
import { Category } from 'src/modules/categories/entities/category.entity';
import { OrderItem } from 'src/modules/order-items/entities/order-item.entity';
import { ProductImage } from 'src/modules/product_image/entities/product_image.entity';
import { Review } from 'src/modules/reviews/entities/review.entity';
import { Wishlist } from 'src/modules/wishlists/entities/wishlist.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  discountPercent: number;

  @Column()
  price: number;

  @Column()
  stock_quantity: number;

  @ManyToOne(() => Brand, (brand) => brand.products, { nullable: true, onDelete: 'SET NULL' })
  category: Category;

  @ManyToOne(() => Brand, (brand) => brand.products, { nullable: true, onDelete: 'SET NULL' })
  brand: Brand;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // product.entity.ts
  @OneToMany(() => Wishlist, (wishlist) => wishlist.product, { cascade: true }) // ✅ Thêm cascade để tự động xóa ảnh khi xóa sản phẩm
  wishlistedBy: Wishlist[];

  @OneToMany(() => OrderItem, (orderItem) => orderItem.product, { cascade: true }) // ✅ Thêm cascade để tự động xóa ảnh khi xóa sản phẩm
  orderItems: OrderItem[];

  // product.entity.ts
  // đồng nghĩa với việc à khi mà thêm ảnh vào sản phẩm thì sẽ được tự động thêm vào bảng product imagea
  @OneToMany(() => ProductImage, (productImage) => productImage.product, { cascade: true }) // ✅ Thêm cascade để tự động xóa ảnh khi xóa sản phẩm
  images: ProductImage[];

  @OneToMany(() => Review, (Review) => Review.product, { cascade: true }) // ✅ Thêm cascade để tự động xóa ảnh khi xóa sản phẩm
  reviews: Review[];

  @OneToMany(() => Category, (category) => category.product, { cascade: true }) // ✅ Thêm cascade để tự động xóa ảnh khi xóa sản phẩm
  categories: Category;
}
