import React from 'react'
import Carousel from "../componets/Carousel";
import ProductList from "../componets/ProductList";

const Home = () => {
  return (
    <>
    <Carousel />
    <ProductList page="home" category="fashion"/>
    <ProductList page="home" category="accessory"/>
    <ProductList page="home" category="digital"/>
    </>
  )
}

export default Home
