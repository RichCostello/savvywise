import * as actions from '../actions/twitterActions';

export const apiTwitter = ({ getState }) => next => action => {
    next(action);

    const getFromApiWithStore = getFromApi(next, getState());
   
    switch (action.type) {
        case 'GET_NEW_TWEETS_STARTED':
            {
                const { getNewTweetsSuccess, getNewTweetsFailure } = actions;
                return getFromApiWithStore(getNewTweetsSuccess, getNewTweetsFailure)
            }
        case 'GET_MORE_TWEETS_STARTED':
            {
                const { getMoreTweetsSuccess, getMoreTweetsFailure } = actions;
                return getFromApiWithStore(getMoreTweetsSuccess, getMoreTweetsFailure)
            }
        case 'GET_TRENDING_TWEETS_STARTED':
            {
                const { getTrendingTweetsSuccess, getTrendingTweetsFailure } = actions;
                return getFromApiWithStore(getTrendingTweetsSuccess, getTrendingTweetsFailure);
            } 
        default: break
    }
}



const calculateTweetsUrl = (limit, searchTerm, offset) => {
    const searchUrl = 'https://api.giphy.com/v1/gifs/search?q=';
    const trendingUrl = 'https://api.giphy.com/v1/gifs/trending?limit=';
    const apiKey = '&api_key=P85PMs1e5hTKVwk3xGfLqNcvJOo6xqHZ';
    if (!searchTerm && !offset) {
        return trendingUrl + limit + apiKey
    } else {
        return searchUrl
            + searchTerm
            + '&limit='
            + limit
            + '&offset='
            + offset
            + apiKey
    }
  
}

const convertToJson = res => res.json();

const getFromApi = (next, { gifsRequired, searchTerm, loadedGifList }) => (successAction, failureAction) => {
    const nextSuccess = res => next(successAction(res))
    const nextFailure = err => next(failureAction(err));
    const offset = loadedGifList.length;
    const url = calculateGifUrl(gifsRequired, searchTerm, offset)
    return fetch(url)
        .then(convertToJson)
        .then(gifResponseToGifUrlList)
        .then(nextSuccess)
        console.log(nextSuccess)
        .catch(nextFailure)
}



const gifResponseToGifUrlList = gifResponse => {
    try {
        return gifResponse.data.map(n => n.images.original.url)
    } catch (err) {
        return err
    }
}

export {
    gifResponseToGifUrlList,
    calculateGifUrl,
    getFromApi
}