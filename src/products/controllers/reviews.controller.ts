import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Review } from '../../models/Review';
import { ReviewsService } from '../services/reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private reviewService: ReviewsService) {}

  @Post(':productId')
  createReview(
    @Param('productId') productId: string,
    @Body() review: Review,
  ): Promise<Review> {
    return this.reviewService.sendReview(productId, review);
  }

  @Get(':productId')
  getProductReviews(
    @Param('productId') productId: string,
  ): Promise<Array<Review>> {
    return this.reviewService.getProductReviews(productId);
  }
}
