import React, { useEffect } from 'react';
import '@/styles/main.scss';
import { Link } from 'react-router-dom';
import { UseStateValue } from '@/context';
import ProductCard from '@/components/ProductCard';

function Basket() {
  const { cart, removeFromCart } = UseStateValue();

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
              <ProductCard key={product.id} product={product} removeProduct={removeFromCart} isBasket={true}/>
            ))}
          </div>
            <div className='basket-total'>
              <div className='basket-total-img'>
                <p>Savatdagi mahsulotlar soni: {cart.length} </p>
                <img src="/assets/icons/discount_cart.svg" alt="" />
              </div>
              <p>Umumiy summa:</p>
              <span>{cart.reduce((total, item) => total + item.price, 0)} so'm</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Basket;
