import React from 'react'
import MyBulletListLoader from '../BulletList'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

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

class ImageCard extends React.Component {
      constructor(props) {
        super(props)
        this.state = { 
          loading: true,
          open: false,
          errored: false
        }
      }
      componentDidMount() {
        
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 3500); // simulates an async action, and hides the spinner
      }

      componentWillUnmount(){
        if (this.timerHandle) {
          clearTimeout(this.timerHandle);
          this.timerHandle = 0;
        }
      }
      
      //handles open close of modal
      handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

      //handles image error
      handleError =(event) => {
        this.setState({errored: true})       
      }
      
      render() {

        const { loading } = this.state;
        const { classes } = this.props;
        if (this.state.errored) {
          return null;
        } else {
        return (

          <div>
           
          {loading ? (
            <Card className="image-card">
            
            <MyBulletListLoader />
           
            </Card>
          ):(
            
            <Card className={classes.card} onClick={this.handleOpen}>
           
            
            <img onError={this.handleError} src={this.props.url} className={classes.image} />
            <CardContent>
            <Typography component="p">
            {this.props.pic.title}
            </Typography>
          </CardContent>
           </Card>
          )}
           <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          >
          <div style={getModalStyle()} className={classes.paper}>
          <button aria-label="Close Account Info Modal Box" className="modal-close" onClick={this.handleClose}>&times;</button>
            <Typography variant="title" id="modal-title">
            {this.props.pic.title}
            </Typography>
            
            <img className="image-modal" src={this.props.url} alt={this.props.pic.title} />
          </div>
          </Modal>
          </div>
        )
      }
      }
}

ImageCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (ImageCard);