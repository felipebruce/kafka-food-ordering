import { Consumer, Producer } from 'kafkajs';

export interface KafkaServiceInterface {
    getConsumer(groupId: string): Consumer;
    getProducer(): Producer;
}
