const initialState = { giphied: [], gifs:[]}


export function Giph (state = initialState, action) {
  
  switch (action.type) {
   
      case "SEARCH_GIFS":
      let giphied = action.payload;
      return {
         ...state, gifs: action.payload, giphied, isFetching: false
      };
      default:
      return state
    }
}
