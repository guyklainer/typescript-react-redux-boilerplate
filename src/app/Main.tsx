import * as ReactDOM from 'react-dom';
import consts from './constants';
import Reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as React from "react";
import App from './App';

declare let module: any;
const ENV = process.env.NODE_ENV;

//Skeleton
const rootElement = document.getElementById('root');
const store = createStore(Reducers);
const app = <App name="guy"></App>;
const provider = <Provider store={store}>{app}</Provider>;

// Hot Reload
if (ENV !== consts.NODE_ENV.PROD && module.hot) {
    module.hot.accept();
    // module.hot.accept('./reducers', () => store.replaceReducer(Reducers));
    // module.hot.accept('./App', () => {
    //     ReactDOM.render(provider, rootElement);
    // });
}

//Render
ReactDOM.render(provider, rootElement);