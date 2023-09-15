import React from 'react'
import { Routes, Route } from "react-router-dom";
import Accossory from "./Accossory";
import Cart from "./Cart";
import Fashion from "./Fashion";
import Home from "./Home";
import Product from "./Product";
import Digital from "./Digital";
import NotFound from "./NotFound";

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/digital' element={<Digital />}/>
            <Route path='/accossory' element={<Accossory />}/>
            <Route path='/fashion' element={<Fashion />}/>
            <Route path='/product' element={<Product />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/*' element={<NotFound />}/>
        </Routes>
    </div>
  )
}

export default AppRouter
