import { createStore, applyMiddleware, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
let middlewares: Middleware[] = [thunk, sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares = [...middlewares, logger];
}

const store = createStore(createRootReducer(), {}, applyMiddleware(...middlewares));

sagaMiddleware.run(sagas);

export default store;
