import express from 'express';
import dotEnv from 'dotenv';
import Routes from './routes';

dotEnv.config();

const port = process.env.PORT || 4000;

const app = express();

Routes.initRoutes(app);

app.listen(port, () => {
  console.log('Server started');
});
