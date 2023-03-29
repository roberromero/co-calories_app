import React from 'react';
import ReactDOM from 'react-dom';
//IMPORTAMOS DOCUMENTO CSS en la linea 4
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
 // <React.StrictMode>
 <BrowserRouter>
     <App />
 </BrowserRouter>,
 // </React.StrictMode>,
  document.getElementById("root")
);

//React.StrictMode is replaced by BrowserRouter in order to access router features from any part of this app


