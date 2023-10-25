import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import 'modern-normalize/modern-normalize.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Global } from 'styles/Global';
import { MyContext, contexValue } from 'context/MyContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContext.Provider value={contexValue}>
      <App />
      <Global />
      <ToastContainer autoClose={2000} />
    </MyContext.Provider>
  </React.StrictMode>
);
