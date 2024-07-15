import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export interface ItemQuantity {
  total_allowed: number;
  total_denied: number;
}

@Schema()
export class Item {
  @Prop()
  name: string;

  @Prop()
  serial: string;

  @Prop()
  type: ItemType;
}

export type ItemType = 'A' | 'B' | 'C' | 'D';

export const ItemSchema = SchemaFactory.createForClass(Item);
