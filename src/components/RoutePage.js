import React from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Login from './Authentication/Login';


const RoutePage = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutePage