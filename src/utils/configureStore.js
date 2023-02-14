import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import error from '../middlewares/errorMiddleware';
import logger from '../middlewares/loggerMiddleware';
import rootReducer from '../reducers';
import rootSaga from '../sagas/rootSaga';

/*
const configureStore = () =>
  createStore(
    rootReducer,
    // install Redux Devtools in browser
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const middlewares = [thunk, logger, error];
const sagaMiddleware = createSagaMiddleware();

/* 
const configureStore = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
*/

const configureStore = () => {
  const middlewares = [sagaMiddleware, logger, error];
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
