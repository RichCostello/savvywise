export const searchTerm = (state = "", action) => {
  switch (action.type) {
      case 'SUBMIT_SEARCH':
          return action.searchTerm
      case 'SUBMIT_SEARCH_ERROR':
          return ''
      default:
          return state
  }
}

export const searchError = (state = "", action) => {
  switch (action.type) {
      case 'SUBMIT_SEARCH_ERROR':
          return action.searchError
      case 'SUBMIT_SEARCH':
          return ''
      default:
          return state;
  }
}

export const gifsRequired = (state = 8, action) => state

export const loadedGifList = (state = [], action) => {
  switch (action.type) {
      case 'GET_NEW_GIFS_STARTED':
      console.log("the post will change")
          return [];
      case 'GET_NEW_GIFS_SUCCESS':
      case 'GET_TRENDING_GIFS_SUCCESS':
          return action.gifList;
      case 'GET_MORE_GIFS_SUCCESS':
          return [state,
              action.gifList
          ].reduce((a, b) => a.concat(b))
      default:
          return state;
  }
}

export const loadingError = (state = '', action) => {
  switch (action.type) {
      case 'GET_NEW_GIFS_FAILURE':
      case 'GET_MORE_GIFS_FAILURE':
      case 'GET_TRENDING_GIFS_FAILURE':
          return action.error.message
      case 'GET_NEW_GIFS_STARTED':
      case 'GET_MORE_GIFS_STARTED':
      case 'GET_TRENDING_GIFS_STARTED':
          return ''
      default:
          return state;
  }
}

export const loadingStatus = (state = false, action) => {
  switch (action.type) {
      case 'GET_NEW_GIFS_STARTED':
      case 'GET_MORE_GIFS_STARTED':
      case 'GET_TRENDING_GIFS_STARTED':
          return true;
      case 'GET_NEW_GIFS_SUCCESS':
      case 'GET_MORE_GIFS_SUCCESS':
      case 'GET_TRENDING_GIFS_SUCCESS':
      case 'GET_NEW_GIFS_FAILURE':
      case 'GET_MORE_GIFS_FAILURE':
      case 'GET_TRENDING_GIFS_FAILURE':
          return false;
      default:
          return state
  }
}

