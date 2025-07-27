import { Module } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { ShipmentsController } from './shipments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shipment } from './entities/shipment.entity';
import { Order } from '../orders/entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shipment, Order])], // Import Shipment entity here
  controllers: [ShipmentsController],
  providers: [ShipmentsService],
  exports: [ShipmentsService], // Export service if needed in other modules
})
export class ShipmentsModule {}
