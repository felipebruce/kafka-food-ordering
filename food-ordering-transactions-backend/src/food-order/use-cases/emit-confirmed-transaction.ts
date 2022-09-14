import { producer } from '../../server';
import { FoodOrderInterface, KafkaServiceInterface } from '../../shared';
import { UseCaseInterface } from '../../shared/interfaces/use-case.interface';

export class EmitConfirmedTransactionUseCase implements UseCaseInterface<FoodOrderInterface, void> {
  constructor(
    readonly kafkaService: KafkaServiceInterface,
  ) {}

  async execute(confirmedOrder: FoodOrderInterface): Promise<void> {
    // Validate some business rules

    await producer.send({
      topic: 'registred-order',
      messages: [
        { value: JSON.stringify(confirmedOrder) },
      ],
    });
  }
}
