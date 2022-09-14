import express from 'express';

import { foodOrderRouter } from './food-order/routes';

export const routes = () => {
  const router = express.Router();
  router.use('/food-order', foodOrderRouter);
  return router;
};
