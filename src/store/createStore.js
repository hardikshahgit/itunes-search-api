import {createStore, applyMiddleware} from 'redux';
import RootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);

export default store;