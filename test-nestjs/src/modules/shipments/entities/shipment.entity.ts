import { Order } from 'src/modules/orders/entities/order.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

@Entity('')
export class Shipment {
  @PrimaryColumn()
  id: number;

  @Column()
  trackingNumber: string;

  @Column()
  carrier: string;

  @Column()
  status: string;

  @Column()
  shippedAt: Date;

  @Column()
  deliveredAt: Date;

  @OneToOne(() => Order, (order) => order.shipment, { onDelete: 'CASCADE' })
  @JoinColumn()
  order: Order; // Assuming there's an Order entity that this shipment relates to)
}
