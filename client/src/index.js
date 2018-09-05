import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider  } from 'react-redux';
import configureStore from './store/configureStore'
import createBrowserHistory from 'history/createBrowserHistory'
import { Router, Route, Switch } from 'react-router-dom';
import './styles/index.css';
import PermanentDrawer from './components/PermanentDrawer';
import DetailPage from './components/DetailPage';
import registerServiceWorker from './registerServiceWorker';
import orange from '@material-ui/core/colors/orange';
import { getTrendingGifsStarted } from './actions/giphyActions';


const theme = createMuiTheme({
    palette: {
      primary: {
        main:'#DB242F'
      },
      secondary: {
        main: '#000',
      },
    },
    status: {
      danger: 'orange',
    },
  
});

const initialState = {
  searchTerm: '',
  searchError: '',
  gifsRequired: 8,
  loadedGifList: [],
  loadingError: '',
  loadingStatus: false
}

const history = createBrowserHistory()

const store = configureStore(initialState);
//store.dispatch(getTrendingGifsStarted());


ReactDOM.render(
  
     <Provider store={store}>
     <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
     <MuiThemeProvider theme={theme}>    
     <Switch>
       <Route path="/" component={PermanentDrawer} />
       <Route path="/details" component={DetailPage}/>
     </Switch>   
    </MuiThemeProvider>
    </Router>  
    </Provider>, document.getElementById('root')
);
registerServiceWorker();

