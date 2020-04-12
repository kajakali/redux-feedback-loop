import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';


// Create your Own theme:
const theme = createMuiTheme({
  palette: {
      primary: {main:purple[200]},
    secondary: {main:pink[200]},
  },
})









const feedbackReducer = (state={id:'current'}, action) => {
    if(action.type === 'ADD_FEEDBACK'){
        return {...state, ...action.payload};
    }
    if(action.type === 'CLEAR_FEEDBACK'){
        return [{id:'current'}];
    }
    return state
}

const adminReducer = (state=[], action) => {
    if(action.type === 'GET_ADMIN'){
        return action.payload

    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
        adminReducer
    }), 
    applyMiddleware(logger)
);

ReactDOM.render(<MuiThemeProvider theme={theme}><Provider store={storeInstance}><App /></Provider></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();



