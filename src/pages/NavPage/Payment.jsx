import React, { useEffect } from 'react'
import '@/styles/main.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Payment() {
  const {t, i18n} = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='payment'>
      <div className='container'>
        <div className='payment-Links'>
          <Link to='/'>{t('Home_page')}</Link>
          <span>&gt;</span>
          <p>{t('payment.Payment')}</p>
        </div>
        <div className='payment-content'>
            <div className='payment-content-registration'>
              <h2>{t('payment.Payment')}</h2>
              <b>{t('payment.ID')}</b>
              <input type="text" placeholder={t('payment.Input_P')} maxLength={10} />
              <div className='text'>
                <p>{t('payment.B')}</p>
                <p>{t('payment.A')}</p>
                <p>{t('payment.M')}</p>
              </div>
              <button className='payment-btn'>{t('payment.Confirmation')}</button>
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