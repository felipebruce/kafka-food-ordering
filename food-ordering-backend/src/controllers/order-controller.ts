import { Request, Response, NextFunction } from 'express';
import { KafkaService } from '../services/index';

export const postOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const kafkaService = new KafkaService();
  const kafkaProducer = kafkaService.getProducer();

  try {
    await kafkaProducer.connect();

    await kafkaProducer.send({
      topic: 'raw-food-ordering-topic',
      messages: [
        { value: JSON.stringify(req.body) },
      ],
    });

    res.send({ status: 200 });
  } catch (error) {
    next(error);
  }
};
