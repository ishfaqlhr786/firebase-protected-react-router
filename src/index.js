import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import {AuthProvider} from './components/Authentication/AuthProvider'
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
//import './node_modules/react-hook-form/dist/index.esm.mjs'

//import {BrowserRouter as Router} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
  <React.StrictMode>
      <ChakraProvider>
       
      <Router>
      <AuthProvider>
      <App />
      </AuthProvider>
      </Router>
     
    </ChakraProvider>
    </React.StrictMode>
      
     
      
    
   
    
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
