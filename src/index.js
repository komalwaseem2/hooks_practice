import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FavColor from './useState1';
import UserList from './useState2';
import MimicLifecycle from './useEffectLifecycle';
import PetList from './useEffect2';
import InputRef from './useRef1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavColor></FavColor>
    <UserList></UserList>
    <PetList pets={["cat","dog"]}></PetList>
    <InputRef></InputRef>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
