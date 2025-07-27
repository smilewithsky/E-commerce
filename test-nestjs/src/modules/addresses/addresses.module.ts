import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Address])], // Import Address entity here
  controllers: [AddressesController],
  providers: [AddressesService],
  exports: [AddressesService], // Export service if needed in other modules
})
export class AddressesModule {}
