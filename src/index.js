import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
//import Homepage from './pages/Homepage';
//import Storepage from './pages/Storepage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
  
        <App />
        
    </BrowserRouter>

);

