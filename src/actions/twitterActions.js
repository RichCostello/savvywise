
// Twitter API
export const submitSearch = searchTerm => ({
    type: 'SUBMIT_SEARCH',
    searchTerm
  });
  
  export const submitSearchError = searchError => ({
    type: 'SUBMIT_SEARCH_ERROR',
    searchError
  })
  
  export const loadMoreTweets = () => ({
    type: 'LOAD_MORE_TWEETS'
  });
  
  export const getNewTweetsStarted = () => ({
    type: 'GET_NEW_TWEETS_STARTED'
  });
  
  export const getNewTweetsSuccess = tweetsList => ({
    type: 'GET_NEW_TWEETS_SUCCESS',
    tweetsList
  });
  
  export const getNewTweetsFailure = error => ({
    type: 'GET_NEW_TWEETS_FAILURE',
    error
  })
  
  export const getMoreTweetsStarted = () => ({
    type: 'GET_MORE_TWEETS_STARTED'
  })
  
  export const getMoreTweetsSuccess = tweetsList => ({
    type: 'GET_MORE_TWEETS_SUCCESS',
    tweetsList
  })
  
  export const getMoreTweetsFailure = error => ({
    type: 'GET_MORE_TWEETS_FAILURE',
    error
  })
  
  export const getTrendingTweetsStarted = () => ({
    type: 'GET_TRENDING_TWEETS_STARTED'
  })
  
  export const getTrendingTweetsSuccess = tweetsList => ({
    type: 'GET_TRENDING_TWEETS_SUCCESS',
    tweetsList
  })
  
  export const getTrendingTweetsFailure = error => ({
    type: 'GET_TRENDING_TWEETS_FAILURE',
    error
  })
  export const getTweetsListNotAsked = () => ({
    type: 'GET_TWEETS_LIST_NOT_ASKED'
  });
  
  export const getTweetsListStarted = () => ({
    type: 'GET_TWEETS_LIST_STARTED'
  });
  
  export const getTweetsListSuccess = tweetsList => ({
    type: 'GET_TWEETS_LIST_SUCCESS',
    tweetsList
  });
  
  export const getTweetsListFailure = error => ({
    type: 'GET_TWEETS_LIST_FAILURE',
    error
  });