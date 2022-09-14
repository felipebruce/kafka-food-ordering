import { DbWrapperInterface, FoodOrderInterface, FoodOrderRepositoryInterface } from '../shared';
import { FoodOrderModel } from '../db/models/food-order-model';

export class FoodOrderRepository implements FoodOrderRepositoryInterface {
  constructor(readonly dbWrapper: DbWrapperInterface) {
  }

  async save(foodOrderParam: FoodOrderInterface): Promise<void> {
    const foodOrder = new FoodOrderModel(foodOrderParam);
    await this.dbWrapper.connect();
    await this.dbWrapper.save(foodOrder);
    await this.dbWrapper.connect();
  }
}
