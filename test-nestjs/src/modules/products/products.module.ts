import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Wishlist } from '../wishlists/entities/wishlist.entity';
import { ProductImage } from '../product_image/entities/product_image.entity';
import { OrderItem } from '../order-items/entities/order-item.entity';
import { Category } from '../categories/entities/category.entity';
import { Brand } from '../brands/entities/brand.entity';
import { Review } from '../reviews/entities/review.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Wishlist, ProductImage, OrderItem, Category, Brand, Review]),
  ], // Import Product entity here if it exists
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService], // Export service if needed in other modules
})
export class ProductsModule {}
