import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
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

  async updateProduct(id: string, updatingProduct: ProductItem): Promise<any> {
    return this.productModel.findByIdAndUpdate(id, updatingProduct, {
      new: true,
    });
  }

  async getProductById(productId): Promise<ProductItem> {
    const product = await this.productModel.findById(productId).exec();
    if (!product) {
      throw new NotFoundException(`Product with id=${productId} wasn't found`);
    }
    return product;
  }
}
