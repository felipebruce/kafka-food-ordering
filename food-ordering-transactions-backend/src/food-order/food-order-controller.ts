import { FoodOrderRepositoryInterface, FoodOrderControllerInterface, FoodOrderFromEventInterface } from '../shared';
import { CreateFoodOrderFunction } from './function/create-food-order-function';

export class FoodOrderController implements FoodOrderControllerInterface {
  constructor(readonly repository: FoodOrderRepositoryInterface) {
  }

  async createFoodOrderHandler(message?: string): Promise<void> {
    if (message && message.length > 0) {
      const createFoodOrderFunction = new CreateFoodOrderFunction(this.repository);
      const foodOrderFromEvent: FoodOrderFromEventInterface = JSON.parse(message);
      createFoodOrderFunction.execute({
        items: foodOrderFromEvent.orders,
        transactionUuid: '',
      });
    }
  }
}
