import mongoose from 'mongoose';

export const ReviewSchema = new mongoose.Schema({
  author: String,
  date: String,
  rate: Number,
  comment: String,
  productId: Number,
});

export class Review {
  constructor(
    author: string,
    rate: number,
    comment: string,
    productId: number,
  ) {
    this.author = author;
    this.rate = rate;
    this.comment = comment;
    this.productId = productId;
  }
  id: number;
  author: string;
  date: string = new Date().toDateString();
  rate: number;
  comment: string;
  productId: number;
}
