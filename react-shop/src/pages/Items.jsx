import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import itemsJSON from '../assets/items.json';
import styled from "styled-components";

function Items({ category = '', theme = 'dark' }) {
  const [categoryName, setCategoryName] = useState('');
  const [dataTheme, setDataTheme] = useState('dark');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const categoriesMap = {
      'fashion': '패션',
      'digital': '디지털',
      'accessory': '액세서리',
    };

    setCategoryName(categoriesMap[category] || '');
    if (!categoriesMap[category]) {
      <Navigate to="*" replace={true} />;
    }
  }, [category]);

  useEffect(() => {
    getItems(category);
  }, [category]);

  const getItems = (category) => {
    const itemsArray = [];
    const map = new Map(Object.entries(itemsJSON));
    const data = new Map(Object.entries(map.get('data') || {}));

    for (let value of data.values()) {
      if (value.category === category) {
        itemsArray.push(value);
      }
    }
    setItems(itemsArray);
  };

  return (
    <section className="main pt-16" data-theme={dataTheme}>
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>홈</li>
            <li>{categoryName}</li>
          </ul>
        </div>
        <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
          <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">{categoryName}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list" data-scroll="false">
            {items.map((el) => (
            <Wrapper>
              <a key={el.imageName} className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal" href={`/product/${el.imageName}`}>
                <figure className="flex h-80 bg-white overflow-hidden">
                  <img src={`./${category}/${el.imageName}.jpg`} alt="상품 이미지" className="transition-transform duration-300" />
                </figure>
                <div className="card-body bg-gray-100 dark:bg-gray-700">
                  <p className="card-title text-base">{el.itemName}</p>
                  <p className="text-base">{`$${el.cost}`}</p>
                </div>
              </a>
            </Wrapper>
            ))}
          </div>
        </article>
      </section>
    </section>
  );
}

const Wrapper = styled.div`
  .card figure img {
    max-height: 50%;
    max-width: 50%;
  }

  .duration-300 {
    transition-duration: 0.3s;
  }

  .transition-transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card:hover {
    img {
      transform: scale(120%);
    }
  }
`;


export default Items;
