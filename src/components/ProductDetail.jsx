import React, { useEffect, useState } from 'react';
import '@/styles/main.scss';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleBalanced, faShareNodes, faThumbsUp, faCircleInfo, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import InstallmentPlan from './InstallmentPlan';

function ProductDetail() {
  const [like, setLike] = useState(false);
  const [compare, setCompare] = useState(false);
  const location = useLocation();
  const product = location.state?.product;

  if (!product) return <p>Mahsulot topilmadi!</p>;

  const toggleFavorite = () => setLike((prev) => !prev);
  const toggleComparison = () => setCompare((prev) => !prev);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <div className='about-corusel'>
                <img src={product.images[0]} alt='Mahsulot rasmi' />
              </div>
              <div className='about-corusel'>
                <img src={product.images[0]} alt='Mahsulot rasmi' />
              </div>
              <div className='about-corusel'>
                <img src={product.images[0]} alt='Mahsulot rasmi' />
              </div>
              <div className='about-corusel'>
                <img src={product.images[0]} alt='Mahsulot rasmi' />
              </div>
            </div>
            <div className='product-about-title-img'>
              <img src={product.thumbnail} alt='Mahsulot rasmi' />
              <div className='product-about-icon'>
                <FontAwesomeIcon
                  icon={like ? solidHeart : regularHeart}
                  onClick={toggleFavorite}
                  className='product-about-icon-like'
                  style={{
                    cursor: 'pointer',
                    color: like ? 'red' : 'blue',
                    transition: 'color 0.3s ease',
                    width: '20px',
                    height: '20px',
                  }}
                />
                <FontAwesomeIcon
                  icon={faScaleBalanced}
                  onClick={toggleComparison}
                  className='product-about-icon-compare'
                  style={{
                    cursor: 'pointer',
                    color: compare ? 'blue' : '#585757',
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
                          color: i < Math.round(product.rating) ? "#FFC107" : "#FFC107",
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
                <button className='about-cart'>
                  <img src="/assets/icons/cart-white.svg" alt="" />
                  <span>Savatchaga qo'shish</span>
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
