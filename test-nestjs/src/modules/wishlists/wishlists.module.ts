import { Module } from '@nestjs/common';
import { WishlistsService } from './wishlists.service';
import { WishlistsController } from './wishlists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wishlist } from './entities/wishlist.entity';
import { User } from '../users/entities/user.entity';
import { Product } from '../products/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wishlist, User, Product])], // Import Wishlist entity
  controllers: [WishlistsController],
  providers: [WishlistsService],
  exports: [WishlistsService], // Export service if needed in other modules
})
export class WishlistsModule {}
