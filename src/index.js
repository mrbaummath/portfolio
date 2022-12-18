import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#656565'
        }
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                border: '3px solid #c596d4'
                }
            }
        }
    }
    
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <App />
        </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
