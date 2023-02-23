import authRouter from './authRoutes';
import cartRouter from './cartRoutes';
import productsRouter from './productsRoutes';
import userRouter from './userRoutes';

export default class Routes {
  static initRoutes(app) {
    app.get('/', (req, res) => {
      res.send('Hello World');
    });

    app.use('/api/user', userRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/products', productsRouter);
    app.use('/api/cart', cartRouter);
  }
}
