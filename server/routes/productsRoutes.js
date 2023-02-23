import express from 'express';

const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
  res.send('products list');
});
productsRouter.get('/:id', (req, res) => {
  res.send(`product info for id: ${req.params.id}`);
});

productsRouter.post('/', (req, res) => {
  res.send('product info');
});

productsRouter.put('/:id', (req, res) => {
  res.send('product info');
});

productsRouter.delete('/:id', (req, res) => {
  res.send('product info');
});

export default productsRouter;
