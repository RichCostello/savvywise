import { connect } from 'react-redux';

import LoadingComponent from './loading-component';
import { getMoreGifsStarted } from '../../actions/giphyActions'

const mapStateToProps = ({ loadedGifList, loadingError, loadingStatus, searchTerm, gifTerm }) => ({
    loadedGifList,
    loadingError,
    loadingStatus,
    isTrendingSearch: searchTerm === ''
})

const mapDispatchToProps = {
    loadMoreGifs: getMoreGifsStarted
}

export const Loading = connect(mapStateToProps, mapDispatchToProps)(LoadingComponent);

export {
    mapStateToProps,
    mapDispatchToProps
}