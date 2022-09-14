import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { Constants } from './shared/index';
import { routes } from './routes';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.set(Constants.PORT, '3001');

app.use(routes());

export default app;
