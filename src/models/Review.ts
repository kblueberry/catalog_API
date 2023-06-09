import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Review {
  @Prop()
  author: string;

  @Prop()
  rate: string;

  @Prop()
  comment: string;

  @Prop({ default: new Date().toDateString() })
  date: string;

  @Prop()
  productId: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
