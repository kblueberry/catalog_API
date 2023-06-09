import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewSchema } from '../models/Review';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { ProductSchema } from '../models/ProductItem';
import { ReviewsService } from './services/reviews.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Product', schema: ProductSchema },
      { name: 'Review', schema: ReviewSchema },
    ]),
  ],
  controllers: [ProductsController],
  exports: [ProductsService, ReviewsService],
  providers: [ProductsService, ReviewsService],
})
export class ProductsModule {}
