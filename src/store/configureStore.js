import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from '../reducers/index';
import { api } from '../middleware/api-middleware';
import { search } from '../middleware/search-middleware';
import thunk from 'redux-thunk';

const middleware = composeWithDevTools(applyMiddleware(
    thunk,
    search,
    api
))

export default function configureStore(initialState) {
    return createStore(allReducers, initialState, middleware)
}