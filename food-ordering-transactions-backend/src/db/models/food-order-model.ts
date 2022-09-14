import { model, Schema } from 'mongoose';
import { FoodOrderInterface } from '../../shared';

const schema = new Schema<FoodOrderInterface>({
  items: [{
    itemName: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  }],
  transactionUuid: { type: String, required: true },
});

export const FoodOrderModel = model<FoodOrderInterface>('FoodOrder', schema);
