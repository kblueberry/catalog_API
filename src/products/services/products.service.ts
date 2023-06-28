import { Injectable } from '@nestjs/common';
import { Model, Promise } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductItem } from '../../models/ProductItem';

@Injectable()
export class ProductsService {
  products: Array<ProductItem> = [];

  constructor(
    @InjectModel('Product') private readonly productModel: Model<ProductItem>,
  ) {}

  async getProducts(): Promise<Array<ProductItem>> {
    return await this.productModel.find().exec();
  }

  async updateProduct(
    id: string,
    updatingProduct: ProductItem,
  ): Promise<ProductItem> {
    return this.productModel.findByIdAndUpdate(id, updatingProduct);
  }
}
