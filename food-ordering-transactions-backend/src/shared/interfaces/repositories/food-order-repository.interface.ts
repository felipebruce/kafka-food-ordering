import { FoodOrderInterface } from '../food-order.interface';

export interface FoodOrderRepositoryInterface {
    save(foodOrder: FoodOrderInterface): Promise<void>;
}
