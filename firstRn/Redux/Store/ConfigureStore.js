/**
 * Created by guohongan on 2017/8/26.
 */

import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from '../Reducers/RootReducer'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState){
    return createStoreWithMiddleware( RootReducer, initialState);
}