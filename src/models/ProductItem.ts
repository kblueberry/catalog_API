import mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  productView: String,
  productName: String,
  priceLevel: String,
  productBrand: String,
  availabilityQmCount: Number,
  inWishlist: Boolean,
});

export class ProductItem {
  id: number;
  productView: string;
  productName: string;
  priceLevel: string;
  productBrand: string;
  availabilityQmCount: number;
  inWishlist = false;
}
