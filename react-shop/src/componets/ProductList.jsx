import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Product({ data }) {
    // console.log('data', ...data);
  return (
    <Link to={`/product/${data.id}`}>
      <div className="card shadow-xl m-2">
        <figure className="h-72 bg-white">
          <img
            src={data.image}
            alt={data.title}
            className="max-h-[70%] sm:w-1/2 hover:scale-110 ease-linear duration-200"
          />
        </figure>
        <div className="card-body h-52">
          <h2 className="card-title text-base">{data.title}</h2>
          <p>${data.price}</p>
          <p>ssså</p>
        </div>
      </div>
    </Link>
  );
}

function ProductList({ page, category }) {
  const productListComp = useRef(null);
  const productContainer = useRef(null);

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    if (page === 'home') {
      productListComp.current?.classList.add('overflow-x-scroll');
      productContainer.current?.classList.add('w-[1000px]', 'grid-cols-4');
    } else if (page === 'category') {
      productContainer.current?.classList.add('grid-cols-1');
    }
  }, []);

  const categoryURLs = {
    fashion: ["men's clothing", "women's clothing"],
    accessory: ['jewelery'],
    digital: ['electronics'],
  };

  let clothing = [];

  useEffect(() => {
    async function fetchProducts(url) {
      const fullURL = 'https://fakestoreapi.com/products/category/' + url;
      const response = await fetch(fullURL);
      const data = await response.json();
    //   console.log(data);
      if (url === "men's clothing") {
        clothing = [...data];
      } else if (url === "women's clothing") {
        clothing = [...clothing, ...data];
        setProductData(clothing);
      } else {
        setProductData(data);
      }
    }

    try {
      categoryURLs[category].forEach((url) => {
        fetchProducts(url);
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  const categoryTitles = {
    fashion: '패션',
    digital: '디지털',
    accessory: '액세서리',
  };

  return (
    <div data-theme="dark">
      <h1 className="text-center pt-16 mb-8 text-4xl font-bold">
        {categoryTitles[category]}
      </h1>
      <div
        id="product-list-component"
        className="p-4 sm:overflow-visible"
        ref={productListComp}
      >
        <div
          id="product-container"
          className="grid sm:w-full sm:grid-cols-2 md:grid-cols-4"
          ref={productContainer}
        >
          {productData.map((product, index) => {
            // console.log('ddd',product);
            if (page === 'home' && index < 4) {
              return <Product key={product.id} data={product} />;
            } else if (page === 'category') {
              return <Product key={product.id} data={product} />;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
