

import { combineReducers } from 'redux';
import {Filt} from './filtered';
import {Giph} from './giphied';
import imageUrls from './imageUrls'


const allReducers = combineReducers({
  filtered: Filt,
  giphied: Giph

})

export default allReducers
