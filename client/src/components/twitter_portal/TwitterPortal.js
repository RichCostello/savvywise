import React from 'react'
import { Label } from 'semantic-ui-react'
import * as IchingTable from '../../constants/lookup.js';
import { HexagramImage } from '../HexagramImage.js';
import * as twitterActions from '../../actions/twitterActions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TweetFeed from './TweetFeed.js';
//import { Loading } from './Loading'
import ReactDOM from 'react-dom'
import classnames from 'classnames';
import { Segment } from 'semantic-ui-react'
import { NavLink, withRouter} from 'react-router-dom';
import ApiSelector from '../ApiSelector';  
import PropTypes from "prop-types";
import Spinner from './Spinner';

class TwitterPortal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedTabId: 1,
      query:"",
      count: "59"
    }  
  }  
  componentDidMount() {
    //let query = this.props.hexagram.tags[0].label 
    //this.props.queryData(query)
    const queryData = {
      query: this.props.hexagram.tags[0].label,
      count: this.state.count
    }
    this.props.sendQueryData(queryData)
    console.log(this.props)
  }

  detailsback(hex) {
    this.props.history.push( `/details/${hex.number}/${hex.name}` );
    this.props;
    console.log("this is the bar hex");
  }
  
  labelClick = (label, event, selectedTabId, id) => {
    event.preventDefault();
    //let query = event.target.innerText;    
    const queryData = {
      query: event.target.innerText,
      count: this.state.count
    }
    this.setState({ selectedTabId : label.id });
    this.props.sendQueryData(queryData);
  }
  render() {
    let {i} =this.props;
    let hexNumber = Number( this.props.match.params.number );
    let hex  = IchingTable.getHexagram( hexNumber );
    let {trigrams, name, number, description, tags, selectedTabId} = this.props.hexagram;
     //start searchtags
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
       //end searchtag
       const { tweets, loading, isSuccess } = this.props.search;
       let content;
        if (loading) {
          content = <Spinner />;
        } else if (tweets.length === 0 && isSuccess) {
          content = (
            <div className="no-content">There is no tweet with those hashtags</div>
          );
        } else if (tweets.length !== 0) {
          content = <TweetFeed tweets={tweets} />;
        } else {
          content = <div className="reminder">Search tweets using hashtags</div>;
        }
      
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
            <p>Click on key words to search Giphy Gifs. Click on image to see full size</p>
             {searchtags}   
            </div>
          <div className="image-wrapper">
          
            {content}
          </div> 
         
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(twitterActions, dispatch)
} 

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(TwitterPortal));