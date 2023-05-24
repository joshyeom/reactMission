import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Section = () => {
  const [products, setProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const getCategoryList = () => {
    const categoryList = [];

    products.forEach(product => {
      if (!categoryList.includes(product.category)) {
        categoryList.push(product.category);
      }
    });

    return categoryList;
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      {getCategoryList().map(category => (
        <div key={category}>
          <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl mt-20 text-center font-bold">
            {category}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list" data-scroll="true">
            {products.map(product => {
              if (product.category === category) {
                return (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
                  >
                    <figure className="flex h-80 bg-white overflow-hidden">
                      <img
                        src={product.image}
                        alt="상품 이미지"
                        className="transition-transform duration-300 hover:scale-110 w-1/3  object-cover max-h-full"
                      />
                    </figure>
                    <div className="card-body bg-gray-100 dark:bg-gray-700">
                      <p className="card-title text-base">{product.title}</p>
                      <p className="text-base">${product.price}</p>
                    </div>
                  </Link>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Section;
