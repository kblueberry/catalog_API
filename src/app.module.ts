import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as process from 'process';
import * as path from 'path';
import { config } from 'dotenv';

config({ path: path.resolve('src', '.env') });

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@khcluster0.khjnbby.mongodb.net/products-catalog`,
    ),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
