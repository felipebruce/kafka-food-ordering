import { KafkaService } from '../../services';
import { FoodOrderInterface, FoodOrderRepositoryInterface, FunctionInterface } from '../../shared';
import { AddFoodOrderUseCase } from '../use-cases/add-food-order-use-case';
import { EmitConfirmedTransactionUseCase } from '../use-cases/emit-confirmed-transaction';

export class CreateFoodOrderFunction implements FunctionInterface<FoodOrderInterface, void> {
  constructor(readonly repository: FoodOrderRepositoryInterface) {
  }

  async execute(data: FoodOrderInterface): Promise<void> {
    const addFoodOrderUseCase = new AddFoodOrderUseCase(this.repository, new KafkaService());
    const emitConfirmedTransactionUseCase = new EmitConfirmedTransactionUseCase(new KafkaService());

    // Validate schema

    const confirmedUuid = await addFoodOrderUseCase.execute(data);
    await emitConfirmedTransactionUseCase.execute(confirmedUuid);
  }
}
