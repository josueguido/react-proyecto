import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from '@reach/router';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "@reach/router";
import Memoria from './componentes/servicios/Memoria';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Memoria>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Memoria>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
