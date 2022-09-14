import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Constants } from './shared/constants';
import * as orderController from './controllers/order-controller';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.set(Constants.PORT, process.env.PORT);

app.post('/order', orderController.postOrder);

export default app;
