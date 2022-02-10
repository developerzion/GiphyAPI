import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import GifDetails from './Getdetails/gifdetails'
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/gifdetails/:sval/:id' element={<GifDetails/>}></Route>
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
