import { Controller, Get } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { ProductItem } from '../../models/ProductItem';
import { Review } from '../../models/Review';
import { ReviewsService } from '../services/reviews.service';

@Controller('products')
export class ProductsController {
  constructor(
    private productsService: ProductsService,
    private reviewService: ReviewsService,
  ) {}

  @Get()
  getAllProducts(): Promise<Array<ProductItem>> {
    return this.productsService.getProducts();
  }

  @Get('/:id/reviews')
  getProductReviews(id: number): Promise<Array<Review>> {
    return this.reviewService.getProductReviews(id);
  }
}
