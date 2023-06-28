import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ProductItem {
  @Prop()
  productView: string;
  @Prop()
  productName: string;
  @Prop()
  productBrand: string;
  @Prop()
  availabilityQmCount: number;
  @Prop()
  price: number;
  @Prop()
  inCart: boolean;
  @Prop()
  inWishList: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(ProductItem);
