import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import gifReducer from '../reducers/gifReducer';

const store = createStore(gifReducer, applyMiddleware(thunk));

export default store;
