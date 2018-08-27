import {
    GET_RESULT_DATA,
    SEARCH_INITIATE,
    SEARCH_LOADING,
    HIDE_SPINNER
  } from "../actions/types";
  
  
  const initialState = {
    query: {},
    tweets: [],
    isSuccess: false,
    loading: false,
  };
  
  export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_RESULT_DATA:
        return Object.assign({}, state, {
          tweets: action.payload,
          isSuccess: true
        });
      case SEARCH_INITIATE:
        return Object.assign({}, initialState, {
          query: action.payload,
          loading: true
        });
      case SEARCH_LOADING:
        return Object.assign({}, state, {
          loading: true
        });
      case HIDE_SPINNER:
        return Object.assign({}, state, {
          loading: false
        });
      default:
        return state;
    }
  }
  