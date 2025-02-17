import React, { useEffect } from 'react'
import '@/styles/main.scss'
import { Link } from 'react-router-dom'

function Payment() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='payment'>
      <div className='container'>
        <div className='payment-Links'>
          <Link to='/'>Bosh sahifa</Link>
          <span>&gt;</span>
          <p>To'lov</p>
        </div>
        <div className='payment-content'>
            <div className='payment-content-registration'>
              <h2>To'lov</h2>
              <b>Buyurtma yoki shaxsiy ID raqamingizni bexato kiriting</b>
              <input type="text" placeholder='Namuna: A777 yoki B999 yoki M333' maxLength={10} />
              <div className='text'>
                <p>B - buyurtma uchun</p>
                <p>A - akkount uchun</p>
                <p>M - rassrochkani so'ndirish uchun</p>
              </div>
              <button className='payment-btn'>Tasdiqlash</button>
            </div>
            <div className='payment-content-img'>
                <img src="/assets/images/order-pay.svg" alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Payment