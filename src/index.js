import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Container/App';
import reportWebVitals from './reportWebVitals';
import { Provider} from 'react-redux';
import { createStore,applyMiddleware,combineReducers } from 'redux';
// import { combineReducers } from '@reduxjs/toolkit';
// import { configureStore } from '@reduxjs/toolkit';
import { searchRobot,requestRobots } from './Components/Reducer';
import { createLogger } from 'redux-logger';
import  {thunk}   from 'redux-thunk';

const rootReducer = combineReducers({
  searchRobot,
  requestRobots
})

const logger = createLogger()
const store = createStore(rootReducer,applyMiddleware(thunk,logger))
// const store = configureStore({
//   reducer : rootReducer,
//   middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk,logger)
// })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = { store }>
        <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
