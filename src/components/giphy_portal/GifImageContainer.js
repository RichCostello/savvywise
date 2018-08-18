import React from 'react'
import { connect } from 'react-redux';

const GifImageContainer = ({ loadedGifList }) => {
  
    return (
      <div className="result-display">
            {loadedGifList.length > 0 &&
                <div className="result-grid">
                test
                    {loadedGifList.map(gif => (<img key={gif} className="gif" src={gif} />))}
                </div>
            }
        </div>
    )
}

const mapStateToProps = ({ loadedGifList }) => ({
    loadedGifList
})

export default connect(mapStateToProps)(GifImageContainer);
