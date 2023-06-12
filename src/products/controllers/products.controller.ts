import { Controller, Get } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { ProductItem } from '../../models/ProductItem';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts(): Promise<Array<ProductItem>> {
    return this.productsService.getProducts();
  }
}
