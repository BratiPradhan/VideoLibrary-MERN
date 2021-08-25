import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from './index.style'

import { BrowserRouter as Router } from 'react-router-dom'
import { VideosRouteProvider } from './context/RouteVideoListingContext';

ReactDOM.render(
  <div>
    <VideosRouteProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
          <GlobalStyles/>
        </Router>
      </ThemeProvider>
    </VideosRouteProvider>
  </div>,
  document.getElementById('root')
);
