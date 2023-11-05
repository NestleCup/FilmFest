import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import reportWebVitals from './reportWebVitals';
import store from './store/store'
import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import {KinopoiskApi} from './services/KinopoiskApi'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

reportWebVitals();
