import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const feedbackReducer = (state={}, action) => {
    if(action.type === 'ADD_FEEDBACK'){
        return {...state, ...action.payload};
    }
    if(action.type === 'CLEAR_FEEDBACK'){
        return [{}];
    }
    return state
}


const storeInstance = createStore(
        feedbackReducer,
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
