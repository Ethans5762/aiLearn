import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'typeface-roboto'
import "@fontsource/roboto-condensed"; // Defaults to weight 400
import "@fontsource/roboto-condensed/400.css"; // Specify weight
import "@fontsource/roboto-condensed/400-italic.css"; // Specify weight and style


// npm install @fontsource/roboto-condensed
// npm i @material-ui/core
// npm install @mui/icons-material
// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/material @mui/styled-engine-sc styled-components
// npm install react-router-dom --save



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// index.html
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@300&display=swap" rel="stylesheet">