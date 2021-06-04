import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import '@progress/kendo-theme-material/dist/all.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Ruba
//Dummy Change
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
