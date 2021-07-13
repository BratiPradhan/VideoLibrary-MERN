import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from './index.style'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
        <GlobalStyles/>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
