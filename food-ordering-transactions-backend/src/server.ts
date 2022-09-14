// import app from './app';
import { KafkaService } from './services/index';
import { DBWrapper } from './db/db-wrapper';
import { FoodOrderRepository } from './food-order/food-order-repository';
import { FoodOrderController } from './food-order/food-order-controller';

const kafka = new KafkaService();
const consumer = kafka.getConsumer('raw-food-ordering-topic');
export const producer = kafka.getProducer();
const dbWrapper = new DBWrapper('mongodb://root:example@mongo:27017');
const repository = new FoodOrderRepository(dbWrapper);
const controller = new FoodOrderController(repository);

(async () => {
  // app.listen(app.get(Constants.PORT));

  await consumer.subscribe({
    topic: 'raw-food-ordering-topic',
  });
  await producer.connect();

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      controller.createFoodOrderHandler(message.value ? message.value.toString() : '');
    },
  });

  console.log('Food ordering transactions backend is ready!');
})();
