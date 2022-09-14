import { v4 as uuidv4 } from 'uuid';
import { FoodOrderInterface, FoodOrderRepositoryInterface, KafkaServiceInterface } from '../../shared';
import { UseCaseInterface } from '../../shared/interfaces/use-case.interface';

export class AddFoodOrderUseCase
implements UseCaseInterface<FoodOrderInterface, FoodOrderInterface> {
  constructor(
    readonly repository: FoodOrderRepositoryInterface,
    readonly kafkaService: KafkaServiceInterface,
  ) {}

  async execute(foodOrderToSave: FoodOrderInterface): Promise<FoodOrderInterface> {
    // Validate some business rules

    const foodOrder = {
      items: foodOrderToSave.items,
      transactionUuid: uuidv4(),
    };

    await this.repository.save(foodOrder);

    return foodOrder;
  }
}
