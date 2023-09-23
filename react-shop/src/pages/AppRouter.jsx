import React from 'react'
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Product from "./Product";
import NotFound from "./NotFound";
import Items from "./Items";

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/digital' element={<Items category='digital'/>}/>
            <Route path='/accossory' element={<Items category='accessory'/>}/>
            <Route path='/fashion' element={<Items category='fashion'/>}/>
            <Route path='/product' element={<Product />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/*' element={<NotFound />}/>
        </Routes>
    </div>
  )
}

export default AppRouter
