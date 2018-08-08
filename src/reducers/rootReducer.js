//Root Reducer

export default function rootReducer(state = {
    filtered: [],
  }, action) {

    switch (action.type) {
      case "SEARCH_IMAGES":
        let filtered = action.payload
       return {...state, images: action.payload, filtered, isFetching: false}
      
      default:
        return state
    }
  }



  