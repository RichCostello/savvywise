import React from 'react'
import ImageCard from './ImageCard'
import ContentLoader from 'react-content-loader'


class ImageContainer extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
      //selectedProducts: [],
			i: 0
		}
  }
  

 
  render() {
    let startItemOfPage = 6 * this.state.id

    let endItemOfPage = 6 * (this.state.i + 1)
 
    const allImages = this.props.filtered.filtered.slice(startItemOfPage, endItemOfPage).map((pic) => {
        return <ImageCard key={pic.id} pic={pic} url={pic.images[0]["link"]} />
       
    })
    
    return (
      <div>
      <div className="image-wrapper">
        {allImages}
      </div>
      <div className='products-list-buttons-container'>
        <a onClick={() => this.setState({i: this.state.i + 1})} className='button is-dark'>more</a>
			</div>
      <div className="note">
              {allImages.length === 0 ? "No search results" : ""}
              
       </div>
       
      </div>
    )
  }
}

export default ImageContainer;
