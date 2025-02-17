import React, { useEffect } from 'react'
import '@/styles/main.scss'
import { Link } from 'react-router-dom';

function Tracking() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='tracking'>
      <div className='container'>
        <div className='tracking-Links'>
          <Link to='/'>Bosh sahifa</Link>
          <span>&gt;</span>
          <p>To'lov</p>
        </div>
        <div className='tracking-content'>
          <div className='tracking-content-registration'>
            <h2>To'lov</h2>
            <b>Buyurtma yoki shaxsiy ID raqamingizni bexato kiriting</b>
            <input type="text" placeholder='Namuna: A777 yoki B999 yoki M333' maxLength={10} />
            <div className='text'>
              <p>B - buyurtma uchun</p>
              <p>A - akkount uchun</p>
              <p>M - rassrochkani so'ndirish uchun</p>
            </div>
            <button className='tracking-btn'>Tasdiqlash</button>
          </div>
          <div className='tracking-content-img'>
            <img src="/assets/images/order-pay.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tracking