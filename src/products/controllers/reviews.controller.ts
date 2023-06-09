import { Body, Controller, Param, Post } from '@nestjs/common';
import { Review } from '../../models/Review';
import { ReviewsService } from '../services/reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private reviewService: ReviewsService) {}

  @Post()
  createReview(
    @Param('productId') productId,
    @Body() review: Review,
  ): Promise<Review> {
    return this.reviewService.sendReview(productId, review);
  }
}
