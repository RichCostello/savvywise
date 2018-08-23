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
  
  export const tweetsRequired = (state = 8, action) => state
  
  export const loadedTweetsList = (state = [], action) => {
    switch (action.type) {
        case 'GET_NEW_TWEETS_STARTED':
        console.log("the post will change")
            return [];
        case 'GET_NEW_TWEETS_SUCCESS':
        case 'GET_TRENDING_TWEETS_SUCCESS':
            return action.tweetsList;
        case 'GET_MORE_TWEETS_SUCCESS':
            return [state,
                action.tweetsList
            ].reduce((a, b) => a.concat(b))
        default:
            return state;
    }
  }
  
  export const loadingError = (state = '', action) => {
    switch (action.type) {
        case 'GET_NEW_TWEETS_FAILURE':
        case 'GET_MORE_TWEETS_FAILURE':
        case 'GET_TRENDING_TWEETS_FAILURE':
            return action.error.message
        case 'GET_NEW_TWEETS_STARTED':
        case 'GET_MORE_TWEETS_STARTED':
        case 'GET_TRENDING_TWEETS_STARTED':
            return ''
        default:
            return state;
    }
  }
  
  export const loadingStatus = (state = false, action) => {
    switch (action.type) {
        case 'GET_NEW_TWEETS_STARTED':
        case 'GET_MORE_TWEETS_STARTED':
        case 'GET_TRENDING_TWEETS_STARTED':
            return true;
        case 'GET_NEW_TWEETS_SUCCESS':
        case 'GET_MORE_TWEETS_SUCCESS':
        case 'GET_TRENDING_TWEETS_SUCCESS':
        case 'GET_NEW_TWEETS_FAILURE':
        case 'GET_MORE_TWEETS_FAILURE':
        case 'GET_TRENDING_TWEETS_FAILURE':
            return false;
        default:
            return state
    }
  }
  
  