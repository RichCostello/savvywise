import React from 'react'
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import GifImageCard from './GifImageCard';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const styles = theme => ({
    card: {
      maxWidth: 300,
      marginTop: 25,
      marginTop: '1vw',
    },
  
    image: {
      width: 300,
      height: 300,
      margin: 'auto',
      marginTop: '3%',
      objectFit: 'cover',
    },
  
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 65,
       [theme.breakpoints.down('sm')]: {
        width: theme.spacing.unit * 50,
      }, 
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
    },
  
  });

class GifImageContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
          open: false
        }
      }
     //handles open close of modal
     handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };


    render() {
        const { loadedGifList, classes } = this.props;

        const gifList = loadedGifList.map(gif => {
            return <GifImageCard key={gif} gif={gif} />
            
        })

        return (
          <div className="result-display">
              
                  <div className="image-wrapper">
                      {gifList}
                  </div>    
                  <div className="note">
                    {gifList.length === 0 ? <p id="morebut">No search results</p> : ""}   
                  </div>       
          </div>    
        )
    }
}

GifImageContainer.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ loadedGifList }) => ({
    loadedGifList
})

export default compose(withStyles(styles), connect(mapStateToProps))(GifImageContainer);