import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthContextProvider from '../../eindopdracht-recipe-app/src/context/AuthContext';
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
          <AuthContextProvider>
              <App/>
          </AuthContextProvider>
      </Router>
  </React.StrictMode>,
)
