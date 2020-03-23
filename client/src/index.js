import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as router} from "react-router-dom";

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);

