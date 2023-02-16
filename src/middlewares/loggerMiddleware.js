const logger = (store) => (next) => (action) => {
  // console.log('PAYLOAD: ', action.payload);
  // console.log('META: ', action.meta);
  next(action);
};

export default logger;
