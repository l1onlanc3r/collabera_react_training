import express from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.send('my user info');
});

userRouter.get('/:id', (req, res) => {
  res.send(`info for user id: ${req.params.id}`);
});

userRouter.post('/', (req, res) => {
  res.send('user info');
});

userRouter.put('/:id', (req, res) => {
  res.send('user info');
});

userRouter.delete('/:id', (req, res) => {
  res.send('user info');
});

export default userRouter;
