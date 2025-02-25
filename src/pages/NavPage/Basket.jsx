import React, { useEffect } from 'react';
import '@/styles/main.scss';
import { Link } from 'react-router-dom';
import { UseStateValue } from '@/context';
import ProductCard from '@/components/ProductCard';
import { useTranslation } from 'react-i18next';

function Basket() {
  const { cart, removeFromCart } = UseStateValue();
  const {t, i18n} = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='basket'>
      <div className='container'>
        <div className='basket-Links'>
          <Link to='/'>{t('Home_page')}</Link>
          <span>&gt;</span>
          <p>{t('basket.Basket')}</p>
        </div>

        {cart.length === 0 ? (
          <div className="basket-empty">
            <img src="/assets/images/basket_no_page.webp" alt="" />
            <p>{t('basket.Not_available')}</p>
            <span>{t('basket.Span')}</span>
            <Link to='/' className="btn">{t('basket.Span2')}</Link>
          </div>
        ) : (
          <div className='basket-content'>
            <div className="basket-list">
              {cart.map((product) => (
                <ProductCard key={product.id} product={product} removeProduct={removeFromCart} isBasket={true} />
              ))}
            </div>
            <div className='basket-total'>
              <div className='basket-total-img'>
                <p className='p'>{t('basket.Number',{ count: cart.length })} </p>
                <div className="tooltip-container">
                  <img src="/assets/icons/discount_cart.svg" alt="" />
                  <div className="tooltip">
                    <p>{t('basket.Discount')}</p>
                    <p>{t('basket.Discount2')}</p>
                    <p>{t('basket.Discount3')}</p>
                    <p>{t('basket.Discount4')}</p>
                  </div>
                </div>
              </div>
              <div className='basket-total-price'>
                <p>{t('basket.Price')}</p>
                <span >{cart.reduce((total, item) => total + item.price * item.quantity * 13000, 0).toLocaleString()} {t('sum')}</span>
              </div>
              <span className='span'></span>
              <Link to='/order' className='btn'>{t('basket.Buy')}</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Basket;
