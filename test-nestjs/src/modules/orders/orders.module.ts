import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order])], // Import Order entity here
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService], // Export service if needed in other modules
})
export class OrdersModule {}
