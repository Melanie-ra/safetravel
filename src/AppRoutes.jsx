import React from 'react'
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Principal from './View/Principal/Principal';
import Encuenta from './View/Encuenta/Encuenta';
const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route path='/home' element={<Principal/>} />
      <Route path='/quiz' element={<Encuenta/>} />
      </Routes>
    </>
  )
}

export default AppRoutes;