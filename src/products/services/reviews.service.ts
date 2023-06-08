import { Injectable } from '@nestjs/common';
import { Model, Promise } from 'mongoose';
import { Review } from '../../models/Review';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ReviewsService {
  constructor(@InjectModel('Review') private reviewModel: Model<Review>) {}

  async getProductReviews(id: number): Promise<Array<Review>> {
    const reviews = await this.reviewModel.find().exec();
    return reviews?.filter((review: Review) => review.productId === id);
  }
}
