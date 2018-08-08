import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider  } from 'react-redux';
import thunk from 'redux-thunk';
import invariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension'
import createBrowserHistory from 'history/createBrowserHistory'
import { Router, Route, Switch } from 'react-router-dom';
import allReducers from './reducers/index';
import './styles/index.css';
import PermanentDrawer from './components/PermanentDrawer';
import DetailPage from './components/DetailPage';
import registerServiceWorker from './registerServiceWorker';
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';


const theme = createMuiTheme({
    palette: {
      primary: orange,
      secondary: green,
    },
  
});

const history = createBrowserHistory()

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))


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

