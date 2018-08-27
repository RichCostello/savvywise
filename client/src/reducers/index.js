

import { combineReducers } from 'redux';
import {Filt} from './filtered';
import {searchReducer} from "./twitterreducer"
import {searchTerm,
  searchError,
  gifsRequired,
  loadedGifList,
  loadingError,
  loadingStatus} from './giphyreducer';


const allReducers = combineReducers({
  filtered: Filt,
  searchTerm,
    searchError,
    gifsRequired,
    loadedGifList,
    loadingError,
    loadingStatus,
    search: searchReducer
})

export default allReducers
