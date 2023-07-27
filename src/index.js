import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/auth-Context';
import store from './Redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; 
import { persistStore } from 'redux-persist'; 
import LoadingSpinner from './Spinner/Loading-Spinner';
import 'normalize.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

const persistor = persistStore(store); 

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <PersistGate loading={<LoadingSpinner/>}  persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

