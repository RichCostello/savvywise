import React from 'react'
import { Label } from 'semantic-ui-react'
import * as IchingTable from '../../constants/lookup.js';
import { HexagramImage } from '../HexagramImage.js';
import * as gifActions from '../../actions/giphyActions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GifImageContainer from './GifImageContainer.js';
import { Loading } from './Loading'
import ReactDOM from 'react-dom'
import classnames from 'classnames';
import { Segment } from 'semantic-ui-react'
import { NavLink, withRouter} from 'react-router-dom';
import ApiSelector from '../ApiSelector';  

class GiphyPortal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedTabId: 1,
      intervalId: null,
      gifsRequired: 5,
      //loadedGifList: [],
    }  
  }  
  componentDidMount() {
    let query = this.props.hexagram.tags[0].label 
    this.props.submitSearch(query)
    console.log(this.props)
  }

  detailsback(hex) {
    this.props.history.push( `/details/${hex.number}/${hex.name}` );
    this.props;
    console.log("this is the bar hex");
  }
  
  labelClick = (label, event, selectedTabId, id) => {
    event.preventDefault();
    let query = event.target.innerText;    
    const { submitSearch } = this.props
    submitSearch(query);
    this.setState({ selectedTabId : label.id });
  }
  render() {
    let hexNumber = Number( this.props.match.params.number );
    let hex  = IchingTable.getHexagram( hexNumber );
    let {trigrams, name, number, description, tags, selectedTabId} = this.props.hexagram;
      let searchtags = (tags).map( (tag, label, id, index) => {
        let initActive = (match, location) => {
          if (!match) {
            return false
          }
          let selectedTabId = parseInt(match.selectedTabId)
          return this.state.selectedTabId === tag.id;
        }
    
        const params = new URLSearchParams(this.props)
        return (
          <div className="labeltags" key={label} >
          <Label 
              onClickCapture={this.labelClick.bind(null, tag)} 
              as={NavLink}
              to="/"
              activeClassName="slabel--active"
              basic size={'large'} 
              value={tag.id}
              key={label} 
              isActive={initActive}
              >
              {tag.label}
            </Label>
          </div>   
        );
      })
      
    return (
      <div>
          <Segment raised>
          <Label
            as='a'
            onClick={this.detailsback.bind(this, hex)}
            onTouchTap={this.detailsback.bind(this, hex)}
            ribbon='right'
            color='orange'
            >
             &#x2190; Back
            </Label> 
          <div className="hexagram-card">
            <HexagramImage below={trigrams.below} above={trigrams.above} />
            <div className="title">
              <h3>{number}: {name}</h3>
              <h2>{description}</h2>
            </div> 
            <ApiSelector hexagram={hex} trigrams/>
          </div>
          </Segment>
            <div>
            <p>Click on key words to search Giphy Gifs</p>
             {searchtags}   
            </div>
          <div>
           <GifImageContainer />
           <Loading />
          </div> 
         
      </div>
    );
  }
}

const mapStateToProps = ({ loadedGifList }) => ({
  loadedGifList
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(gifActions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GiphyPortal))