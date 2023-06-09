import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductItem } from '../../models/ProductItem';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<ProductItem>,
  ) {}

  async getProducts(): Promise<Array<ProductItem>> {
    const products = await this.productModel.find().exec();
    return products;
  }
}
