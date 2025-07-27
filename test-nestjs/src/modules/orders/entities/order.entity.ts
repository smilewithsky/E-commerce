import { Address } from 'src/modules/addresses/entities/address.entity';
import { Payment } from 'src/modules/payments/entities/payment.entity';
import { Shipment } from 'src/modules/shipments/entities/shipment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum OrderStatus {
  PENDING = 'pending',
  PAID = 'paid',
  SHIPPED = 'shipped',
  CANCELED = 'canceled',
}

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.PENDING,
  })
  status: OrderStatus;

  @Column()
  paymentMethod: string;

  @ManyToOne(() => Address, (address) => address.id, { onDelete: 'CASCADE' })
  shippingAddressId: Address[];

  @OneToMany(() => Payment, (Payment) => Payment.id, { onDelete: 'CASCADE' })
  Payment: Payment[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Shipment, (shipment) => shipment.order)
  shipment: Shipment;
}
