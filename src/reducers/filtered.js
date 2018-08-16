const initialState = { filtered: [], giphied: [], images:[], gifs:[]}


export function Filt (state = initialState, action) {
  
  switch (action.type) {
   
    case "SEARCH_IMAGES":
      let filtered = action.payload;
      return {
         ...state, images: action.payload, filtered, isFetching: false
      };
      
      case "SEARCH_GIFS":
      let giphied = action.payload;
      return {
         ...state, gifs: action.payload, giphied, isFetching: false
      };
      default:
      return state
    }
}



