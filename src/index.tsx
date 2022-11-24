import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WeatherProvider from './components/Weathers/WeatherProvider';
import reducer, { initialState } from './components/Weathers/WeatherReducer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WeatherProvider initialState={initialState} reducer={reducer}>
    <App />
    </WeatherProvider>
  </React.StrictMode>
);

