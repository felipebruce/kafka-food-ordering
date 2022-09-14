// import express from 'express';

// import { DBWrapper } from '../db/db-wrapper';
// import { FoodOrderController } from './food-order-controller';
// import { FoodOrderRepository } from './food-order-repository';

// export const foodOrderRouter = () => {
//   const dbWrapper = new DBWrapper('mongodb://localhost:27017/order-food-db');
//   const repository = new FoodOrderRepository(dbWrapper);
//   const controller = new FoodOrderController(repository);

//   const router = express.Router();

//   router.route('/')
//     .post(controller.createFoodOrderHandler);

//   return router;
// };
