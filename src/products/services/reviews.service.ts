import { Injectable } from '@nestjs/common';
import { Model, Promise } from 'mongoose';
import { Review } from '../../models/Review';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ReviewsService {
  constructor(@InjectModel('Review') private reviewModel: Model<Review>) {}

  async getProductReviews(id: string): Promise<Array<Review>> {
    const reviews = await this.reviewModel.find().exec();
    return reviews?.filter((review: Review) => review.productId === id);
  }

  async sendReview(productId: string, review: Review) {
    const reviewModel = new this.reviewModel(review);
    reviewModel.productId = productId;
    return await reviewModel.save();
  }
}
