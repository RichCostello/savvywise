import React from 'react'
import GifImageCard from './GifImageCard'
import ContentLoader from 'react-content-loader'
import $ from 'jquery';

class GifImageContainer extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
 
			i: 0
		}
  }
 
 
  render() {
    let startItemOfPage = 6 * this.state.id
    console.log("image page " + this.props.giphied)
    let endItemOfPage = 6 * (this.state.i + 1)
 
    const allImages = this.props.giphied.giphied.slice(startItemOfPage, endItemOfPage).map((gifs) => {
        return <GifImageCard key={gifs.id}  />
       
    })
    
    return (
      <div>
      <div className="image-wrapper">
        {allImages}
      </div>
      <div className="note">
              {allImages.length === 0 ? <p id="morebut">No search results</p> : ""}   
       </div>
      <div className='products-list-buttons-container'>
        {allImages.length ? <a onClick={() => this.setState({i: this.state.i + 1})} className='button is-dark'>more</a> : ""}
			</div>
      
       
      </div>
    )
  }
}

export default GifImageContainer;
