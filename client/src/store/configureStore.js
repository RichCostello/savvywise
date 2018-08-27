import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from '../reducers/index';
import { apiGiphy } from '../middleware/api-giphy';
import { searchGiphy } from '../middleware/search-giphy';
import thunk from 'redux-thunk';

const middleware = composeWithDevTools(applyMiddleware(
    thunk,
    searchGiphy,
    apiGiphy
))

export default function configureStore(initialState) {
    return createStore(allReducers, initialState, middleware)
}