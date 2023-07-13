import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { ProductItem } from '../../models/ProductItem';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts(): Promise<Array<ProductItem>> {
    return this.productsService.getProducts();
  }

  @Put(':productId')
  updateProduct(@Param('productId') productId, @Body() product: ProductItem) {
    return this.productsService.updateProduct(productId, product);
  }

  @Get(':productId')
  getProductById(@Param('productId') productId): Promise<ProductItem> {
    return this.productsService.getProductById(productId);
  }
}
