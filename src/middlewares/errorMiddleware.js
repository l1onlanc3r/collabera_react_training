import axiosInstance from '../utils/axiosInstance';

const error = (store) => (next) => async (action) => {
  // error occurs in project
  // base on action identify error occurs or not
  //   if error is there then make a server call and once the servercall complete call next action

  console.log('From Error Middleware:');
  console.log('Store: ', store.getState());
  console.log('Action: ', action);

  const {
    user: { user },
  } = store.getState();

  const { type, payload, meta } = action;

  // action contains "FAIL"
  const match = /(.*)_(FAIL)/.exec(action.type);

  // do nothing
  if (match) {
    const data = {
      user,
      type,
      payload,
      meta,
      createdAt: new Date(),
    };

    await axiosInstance.post('/errors', data).then(
      (response) => {
        console.log('response: ', response);

        next(action);
      },
      (err) => {
        console.log('error: ', err);

        const errors = JSON.parse(localStorage.getItem('errors')) || [];
        console.log('errs: ', errors);
        console.log('errs2: ', JSON.stringify([...errors, data]));
        localStorage.setItem('errors', JSON.stringify([...errors, data]));
      },
    );
  } else {
    console.log('went to next action');
    next(action);
  }
};

export default error;
