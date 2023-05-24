import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { RecoilRoot, atom, useRecoilValue } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { cartItemCountState } from './recoil/recoilState.tsx';

const { persistAtom } = recoilPersist();

export default function Info() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartItemCount, setCartItemCount] = useRecoilState(cartItemCountState);

  const handleAddToCart = () => {
    setCartItemCount(cartItemCount + 1);
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const fullStars = Math.floor(product.rating.rate);
  const halfStar = product.rating.rate % 1 !== 0;

  const starElements = [];

  for (let i = 0; i < fullStars; i++) {
    starElements.push(
      <input
        key={i}
        type="radio"
        name="rating-10"
        className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-2"
        disabled
        defaultChecked
      />
    );
  }

  if (halfStar) {
    starElements.push(
      <input
        key={fullStars}
        type="radio"
        name="rating-10"
        className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
        disabled
        defaultChecked
      />
    );
  }

  for (let i = 0; i < 5 - Math.ceil(product.rating.rate); i++) {
    starElements.push(
      <input
        key={fullStars + i + 1}
        type="radio"
        name="rating-10"
        className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
        disabled
      />
    );
  }

  return (
    <section className="main pt-16">
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <div>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>{product.category}</li>
              <li>{product.title}</li>
            </ul>
          </div>
          <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
            <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
              <img src={product.image} alt={product.title} className="object-contain w-full h-72" />
            </figure>
            <div className="card-body px-1 lg:px-12">
              <h2 className="card-title">
                {product.title} <span className="badge badge-accent ml-2">NEW</span>
              </h2>
              <p>{product.description}</p>
              <div className="flex items-center mt-3">
                <div className="rating rating-half">{starElements}</div>
                <div className="ml-2">
                  {product.rating.rate} / {product.rating.count} 참여
                </div>
              </div>
              <p className="mt-2 mb-4 text-3xl">${product.price}</p>
              <div className="card-actions">
                <button className="btn btn-primary" onClick={handleAddToCart}>
                  장바구니에 담기
                </button>
                <a className="btn btn-outline ml-1" href="/cart">
                  장바구니로 이동
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}