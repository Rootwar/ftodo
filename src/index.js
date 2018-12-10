import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './index.css';

import App from './components/App';
import reducers from './reducers/index';
import * as serviceWorker from './serviceWorker';

const middleware = [];
middleware.push(thunk);

//*** Create store ***//
const store = createStore(
	reducers,
	applyMiddleware(...middleware)
);

//*** Render application ***//
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('wrapper')
);

serviceWorker.register();
