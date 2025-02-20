import React, { useEffect, useState } from 'react';
import '@/styles/main.scss';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleBalanced, faShareNodes, faThumbsUp, faSpinner, faStar, faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import InstallmentPlan from './InstallmentPlan';
import { UseStateValue } from '@/context';

function ProductDetail() {
  const { favorites, toggleFavorite, comparison, toggleComparison, cart, toggleCart } = UseStateValue();
  const location = useLocation();
  const product = location.state?.product;
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) return <p>Mahsulot topilmadi!</p>;

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <section className='product-about'>
      <div className='container'>
        <div className='about-Links'>
          <Link to='/'>Bosh sahifa</Link>
          <span>&gt;</span>
          <p>{product.title}</p>
        </div>
        <div className='about-content'>
          <div className='product-about-title'>
            <div className='product-about-title-corusel'>
              {[...Array(4)].map((_, index) => (
                <div className='about-corusel' key={index}>
                  {!imageLoaded && (
                    <div className="loading-spinner">
                      <FontAwesomeIcon icon={faSpinner} spin style={{ fontSize: "24px", color: "#ccc" }} />
                    </div>
                  )}
                  <img
                    src={product.images[0]}
                    alt='Mahsulot rasmi'
                    onLoad={() => setImageLoaded(true)}
                    style={{ display: imageLoaded ? "block" : "none" }}
                  />
                </div>
              ))}
            </div>
            <div className='product-about-title-img'>
              {!imageLoaded && (
                <div className="loading-spinner">
                  <FontAwesomeIcon icon={faSpinner} spin style={{ fontSize: "54px", color: "#ccc" }} />
                </div>
              )}
              <img
                src={product.thumbnail}
                alt='Mahsulot rasmi'
                onLoad={() => setImageLoaded(true)}
                style={{ display: imageLoaded ? "block" : "none" }}
              />
              <div className='product-about-icon'>
                <FontAwesomeIcon
                  icon={favorites.some((fav) => fav.id === product.id) ? solidHeart : regularHeart}
                  onClick={() => toggleFavorite(product)}
                  className='product-about-icon-like'
                  style={{
                    cursor: 'pointer',
                    color: favorites.some((fav) => fav.id === product.id) ? 'red' : '#585757',
                    transition: 'color 0.3s ease',
                    width: '20px',
                    height: '20px',
                  }}
                />
                <FontAwesomeIcon
                  icon={faScaleBalanced}
                  onClick={() => toggleComparison(product)}
                  className='product-about-icon-compare'
                  style={{
                    cursor: 'pointer',
                    color: comparison.some((comp) => comp.id === product.id) ? 'blue' : '#585757',
                    transition: 'color 0.3s ease',
                    width: '20px',
                    height: '20px',
                  }}
                />
              </div>
            </div>
            <div className='product-about-title-text'>
              <h2>{product.title}</h2>
              <div className='reyting'>
                <div className='reyting-star'>
                  <span>
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={i < Math.round(product.rating) ? faStar : faStarRegular}
                        style={{
                          color: "#FFC107",
                          marginRight: "5px",
                          fontSize: "20px"
                        }}
                      />
                    ))}
                  </span>
                  <p>{Array.isArray(product.reviews) && product.reviews.length > 0 ? `${product.reviews.length} ta sharh` : "Sharhlar yo‘q"}</p>
                </div>
                <button className='reyting-btn'>
                  <FontAwesomeIcon icon={faShareNodes} style={{ color: '##006bff' }} />
                  Ulashish
                </button>
              </div>
              <h3>{(product.price * 13000).toLocaleString()} so'm</h3>
              <div className='about-brend'>
                <div className='bmh'>
                  <p>Brend:</p>
                  <div className='line'></div>
                  <span className='brend-name'>{product.brand || 'Noma’lum'}</span>
                </div>
                <div className='bmh'>
                  <p>Model:</p>
                  <div className='line'></div>
                  <span className='brend-model'>{product.sku || 'Noma’lum'}</span>
                </div>
                <div className='bmh'>
                  <p>Holati:</p>
                  <div className='line'></div>
                  <span
                    className='brend-status'
                    style={{ color: product.inStock ? 'green' : 'red' }} >
                    ● {product.inStock ? 'Sotuvda bor' : 'Sotuvda yo\'q'}
                  </span>
                </div>
              </div>
              <div className='product-about-title-text-btn'>
                <button
                  className='about-cart'
                  style={{ backgroundColor: isInCart ? "red" : "#00bfaf"}} 
                  onClick={() => toggleCart(product)}
                >
                  <FontAwesomeIcon
                    icon={isInCart ? faTrash : faCartShopping} 
                    style={{ color: "#FFFFFF", fontSize: "20px" }}
                  />
                  <span>{isInCart ? "Savatchadan o'chirish" : "Savatchaga qo'shish"}</span>
                </button>
                <button className='about-order'>Hoziroq xarid qilish</button>
              </div>
              <h2>Ovoz bering:</h2>
              <div className='product-about-title-text-sound'>
                <FontAwesomeIcon icon={faThumbsUp} className='icon-th' />
                <p>Tavsiya qilaman </p>
                <span>{product.likes || 0}</span>
              </div>
            </div>
          </div>
          <InstallmentPlan product={product} />
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
