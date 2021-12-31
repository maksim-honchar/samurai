import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';

const rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} dispatch={store.dispatch.bind(store)} store={store} />
		</BrowserRouter>,
		document.getElementById('root')
	);
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
	const state = store.getState()
	rerenderEntireTree(state)
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
