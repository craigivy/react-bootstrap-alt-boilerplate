import ReactDom from'react-dom';
import React from'react';
import Root from'./Root';
import history from './history';

const rootElement = document.getElementById('root');

console.log('Root');
ReactDom.render(<Root history={history} />, rootElement);
