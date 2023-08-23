import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import jsonData from './data.json' ;
ReactDOM.hydrate(
  <React.StrictMode>
    <App data={jsonData} />
  </React.StrictMode>,
  document.getElementById('root')
);