import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
const root = ReactDOM.createRoot(document.getElementById('root'));

let theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Kumbh Sans, sans-serif",
      color: "#000",
    },
    h2: {
      fontFamily: "Kumbh Sans, sans-serif",
      color: "#000",
    },
    h3: {
      fontFamily: "Kumbh Sans, sans-serif",
      color: "#000",
    },
    h4: {
      fontFamily: "Kumbh Sans, sans-serif",
      color: "#000",
      fontWeight: "800",
    },
    h5: {
      fontFamily: "Kumbh Sans, sans-serif",
      color: "#000",
    },
    h6: {
      fontFamily: "Kumbh Sans, sans-serif",
      color: "#000",
    },
    subtitle1: {
      fontFamily: "Kumbh Sans, sans-serif",
      color: "#5D5D5D",
    },
    subtitle2: {
      fontFamily: "Kumbh Sans, sans-serif",
      color: "#00000099",
    },
    body1: {
      fontFamily: "Kumbh Sans, sans-serif",
      color: "#C2B9B0",
    },
    body2: {
      fontFamily: "Kumbh Sans, sans-serif",
    },
    button: {
      fontFamily: "Kumbh Sans, sans-serif",
    },
    caption: {
      fontFamily: "Kumbh Sans, sans-serif",
      color: "#000",
    },
    overline: {
      fontFamily: "Kumbh Sans, sans-serif",
    },
  },
});
theme = responsiveFontSizes(theme);

root.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  </React.StrictMode>
);
