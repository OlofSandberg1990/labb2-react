import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  //Omsluter min app med Router vilket gör att jag kan använda mig av routing inom min <App>
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
