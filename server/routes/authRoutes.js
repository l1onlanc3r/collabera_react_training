import express from 'express';

const authRouter = express.Router();

authRouter.post('/login', (req, res) => {
  res.send('auth info');
});

authRouter.post('/register', (req, res) => {
  res.send('auth info');
});

authRouter.put('/forgot-password', (req, res) => {
  res.send('auth info');
});

authRouter.put('/change-password', (req, res) => {
  res.send('auth info');
});

export default authRouter;
