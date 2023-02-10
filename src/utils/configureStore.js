import { createStore } from 'redux';
import rootReducer from '../reducers';

const configureStore = () =>
  createStore(
    rootReducer,
    // install Redux Devtools in browser
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default configureStore;
