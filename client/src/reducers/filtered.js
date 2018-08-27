const initialState = { filtered: [], images:[]}


export function Filt (state = initialState, action) {
  
  switch (action.type) {
   
    case "SEARCH_IMAGES":
      let filtered = action.payload;
      return {
         ...state, images: action.payload, filtered, isFetching: false
      };
      
      default:
      return state
    }
}



