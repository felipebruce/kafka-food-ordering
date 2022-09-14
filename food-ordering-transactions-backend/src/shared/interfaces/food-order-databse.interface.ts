import { Model } from 'mongoose';
import { FoodOrderInterface } from './food-order.interface';

export interface FoodOrderDatabaseInterface {
    getFoodOrderModel(): Model<FoodOrderInterface>;
}
