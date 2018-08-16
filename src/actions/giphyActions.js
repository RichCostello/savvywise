import { createSelector } from 'reselect';

import { REACT_APP_CLIENT_ID_GIPHY } from '../constants/ActionTypes';


// Giphy API
export function searchGiphy(query) {
  
  return (dispatch) => {
    dispatch(requestImages(query))
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=P85PMs1e5hTKVwk3xGfLqNcvJOo6xqHZ&q=${query}&limit=60&offset=0&rating=R&lang=en`)
      .then(res => res.json())
      .then(gifs => {
        dispatch({type: "SEARCH_GIFS", payload: gifs.data })
      })
      .catch(error => console.log("Can’t access cause of cors"))
  }

}

function requestImages(query) {
    return (dispatch) => {
      dispatch({type: "REQUEST_IMAGES"}),
      query
    }
  }

