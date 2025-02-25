import React, { useEffect, useState } from 'react'
import '@/styles/main.scss'
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from 'react-i18next';

function Tracking() {
  const [recaptchaValue, setRecaptchaValue] = useState(null);  
  const {t, i18n} = useTranslation()

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='tracking'>
      <div className='container'>
        <div className='tracking-Links'>
          <Link to='/'>{t('Home_page')}</Link>
          <span>&gt;</span>
          <p>{t('tracking.Order_status')}</p>
        </div>
        <div className='tracking-content'>
          <div className='tracking-content-registration'>
            <h2>{t('tracking.Order_status')}</h2>
            <b>{t('tracking.P')}</b>
            <input type="text" placeholder={t('tracking.Input_P')} />
            <label htmlFor="tel">
              <p>{t('tracking.B')} <span>*</span></p>
              <input type="tel" name="" id="tel" />
            </label>
            <div className='capcha'>
              <ReCAPTCHA
                sitekey="6Le4qNkqAAAAADlnJGrpsNdMJpY5Q18947NNn86I" 
                onChange={handleRecaptchaChange}
              />
            </div>
            <button className='tracking-btn' disabled={!recaptchaValue}>{t('tracking.Login')}</button>
          </div>
          <div className='tracking-content-img'>
            <img src="/assets/images/tracking.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tracking