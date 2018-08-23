

import { combineReducers } from 'redux';
import {Filt} from './filtered';
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
    loadingStatus
})

export default allReducers
