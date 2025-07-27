import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './modules/users/entities/user.entity';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductsModule } from './modules/products/products.module';
import { BrandsModule } from './modules/brands/brands.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { WishlistsModule } from './modules/wishlists/wishlists.module';
import { CartsModule } from './modules/carts/carts.module';
import { CartItemModule } from './modules/cart_item/cart_item.module';
import { ProductImageModule } from './modules/product_image/product_image.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { AddressesModule } from './modules/addresses/addresses.module';
import { OrdersModule } from './modules/orders/orders.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { OrderItemsModule } from './modules/order-items/order-items.module';
import { ShipmentsModule } from './modules/shipments/shipments.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Để biến môi trường có thể dùng ở mọi module
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Hoặc [__dirname + '/**/*.entity{.ts,.js}']
      synchronize: true, // ⚠️ chỉ dùng ở môi trường DEV
      // logging: true,
    }),
    UsersModule,
    AuthModule,
    ProductsModule,
    BrandsModule,
    CategoriesModule,
    WishlistsModule,
    CartsModule,
    CartItemModule,
    ProductImageModule,
    ReviewsModule,
    AddressesModule,
    OrdersModule,
    PaymentsModule,
    OrderItemsModule,
    ShipmentsModule,
  ],
})
export class AppModule {}
