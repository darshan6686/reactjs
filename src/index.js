import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Booklist from './Booklist';
// import Fake from './Fake';
// import Listapp from './Listapp';
// import Tasklist2 from './Tasklist2';
// import Tasklist3 from './filter/Tasklist3';
// import Tasklist4 from './handleclick/Tasklist4';
// import Hook from './Hook/Hooklist';
// import Hooktask1 from './Hooktask/Hooktask1';
import Hooktask2 from './Hooktask/Hooktask2';
import reportWebVitals from './reportWebVitals';
import "jquery";
import "@popperjs/core/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Hooktask2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
