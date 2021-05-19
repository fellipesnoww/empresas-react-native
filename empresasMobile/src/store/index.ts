import { applyMiddleware, createStore } from 'redux';
import { IUserAuthenticated } from './modules/authentication/types';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export interface IState{
    authentication: IUserAuthenticated;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
