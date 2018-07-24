import { createStore, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import routReducer from '../reducers/';

const store = createStore(routReducer, applyMiddleware(createLogger()));

export default store;