import { createSelector } from 'reselect';

import { REACT_APP_CLIENT_ID } from '../constants/ActionTypes';




//ACTIONS
  //IMGUR API
  export function searchImages(query) {
    const data = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json",
        'Authorization': REACT_APP_CLIENT_ID
      }
    };
    return (dispatch) => {
      dispatch(requestImages(query))
      fetch(`https://api.imgur.com/3/gallery/search/time/all/0?q=${query}&q_type=png&q_type=album`, data)
        .then(res => res.json())
        .then(images => {
          dispatch({type: "SEARCH_IMAGES", payload: images.data })
        })
        .catch(error => console.log("Error at searchImages", error))
    }
  
  }

  function requestImages(query) {
    return (dispatch) => {
      dispatch({type: "REQUEST_IMAGES"}),
      query
    }
  }
  

  
