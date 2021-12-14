import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import Reducer from './ducks/Reducer';

// saga
const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
