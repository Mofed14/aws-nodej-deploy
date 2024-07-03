import mongoose from 'mongoose';
import { IProduct } from './products.model.interface.js';
import {Model} from '@helpers/models.enum.js'

const { Schema } = mongoose;

const productSchema = new Schema<IProduct>({
  name: {
    ar: { type: String, required: true },
    en: { type: String, required: true }
  },
  description: {
    ar: { type: String, required: true },
    en: { type: String, required: true }
  },
  isDeleted: { type: Boolean, default: false },
  icon: { type: String, required: true }
});


export default mongoose.model<IProduct>(Model.PRODUCT, productSchema);