import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import TagManager from 'react-gtm-module';

import './index.css';
import App from './Pages/App/App';
import reportWebVitals from './reportWebVitals';
import store from './store';

// type TagManagerArgs = {
//   gtId: string;
// };

// const tagManagerArgs = {
//   gtId: 'GTM-K4K6GMJ',
// };

TagManager.initialize({ gtmId: 'GTM-K4K6GMJ' });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
