/* eslint-disable no-empty-function */
import { Kafka, Consumer, Producer } from 'kafkajs';
import { KafkaServiceInterface } from '../shared/index';

export class KafkaService implements KafkaServiceInterface {
  private kafka: Kafka;

  constructor() {
    this.kafka = new Kafka({
      clientId: 'food-ordering-transactions-client',
      brokers: ['kafka:29092'],
    });
  }

  getConsumer(groupId: string): Consumer {
    return this.kafka.consumer({ groupId });
  }

  getProducer(): Producer {
    return this.kafka.producer();
  }
}
