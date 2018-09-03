import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";
import consts from "./constants";
import store from "./store";

declare let module: any;

// Config
//-------------
const PROD_NAME   = "production";
const ENV         = process.env.NODE_ENV;
const rootElement = document.getElementById(consts.ROOT_ELEMENT_ID);

// Skeleton
//-------------
const app      = <App/>;
const provider = <Provider store={store}>{app}</Provider>;

// Hot Reload
//-------------
if (ENV !== PROD_NAME && module.hot) {
	module.hot.accept();
	// module.hot.accept('./reducers', () => store.replaceReducer(Reducers));
	// module.hot.accept('./App', () => {
	//     ReactDOM.render(provider, rootElement);
	// });
}

// Render
//-------------
ReactDOM.render(provider, rootElement);