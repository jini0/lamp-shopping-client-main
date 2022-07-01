import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';       //🧡BrowserRouter를 import 해줌!

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 🧡Routes하기 전에 BrowserRouter를 해야함!! -> BrowserRouter안에 있어야!!
  //   Router를 쓰려면 제일 밖에 감싸줘야한다!
  //   <App />에(App.js) 모든게 다 있으니까! -> 이걸 감싸주면 Router를 다 쓸 수 있음!!!!!
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
