import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Booklist from './Booklist';
// import Fake from './Fake';
// import Listapp from './Listapp';
import Task from './Task';
import reportWebVitals from './reportWebVitals';
import "jquery";
import "@popperjs/core/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
  <Task />
  {/* <Listapp /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
