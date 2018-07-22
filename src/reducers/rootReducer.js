export default function rootReducer(state = {
  images: [],
  filtered: [],
  isFetching: false
}, action) {
  let imagepics = Object.assign([], state.imagepics)

  switch (action.type) {
    case "INVALIDATE_IMAGE":
      return {
        ...state,
        didInvalidate: true
      }
    case "REQUEST_IMAGES":
      return {
        ...state,
        isFetching: true
      }
    case "SEARCH_IMAGES":
      let filtered = action.payload
     return {...state, images: action.payload, filtered, isFetching: false}
    
    default:
      return state
  }
}