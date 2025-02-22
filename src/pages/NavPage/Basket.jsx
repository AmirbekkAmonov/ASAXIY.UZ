import React, { useEffect } from 'react';
import '@/styles/main.scss';
import { Link } from 'react-router-dom';
import { UseStateValue } from '@/context';
import ProductCard from '@/components/ProductCard';

function Basket() {
  const { cart, removeFromCart, updateCartQuantity } = UseStateValue();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='basket'>
      <div className='container'>
        <div className='basket-Links'>
          <Link to='/'>Bosh sahifa</Link>
          <span>&gt;</span>
          <p>Savatcha</p>
        </div>

        {cart.length === 0 ? (
          <div className="basket-empty">
            <img src="/assets/images/basket_no_page.webp" alt="" />
            <p>Savatda hozircha mahsulot yo'q.</p>
            <span>Bosh sahifadagi termalardan boshlang yoki kerakli mahsulotni qidiruv orqali toping.</span>
            <Link to='/' className="btn">Asosiy menyu</Link>
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
                <p className='p'>Savatdagi mahsulotlar soni: {cart.length} </p>
                <div className="tooltip-container">
                  <img src="/assets/icons/discount_cart.svg" alt="" />
                  <div className="tooltip">
                    <p>5ta kitob uchun 5% chegirma</p>
                    <p>10ta kitob uchun 10% chegirma</p>
                    <p>20ta kitob uchun 12% chegirma</p>
                    <p>50ta kitob uchun 15% chegirma</p>
                  </div>
                </div>
              </div>
              <p>Umumiy qiymat:</p>
              <span >{cart.reduce((total, item) => total + item.price * item.quantity * 13000, 0).toLocaleString()} so'm</span>
              <span className='span'></span>
              <Link to='/order' className='btn'>Buyurtma berish</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Basket;
