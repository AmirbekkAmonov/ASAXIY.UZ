import React, { useEffect, useState } from 'react'
import '@/styles/main.scss'
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

function Tracking() {
  const [recaptchaValue, setRecaptchaValue] = useState(null);  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <Link to='/'>Bosh sahifa</Link>
          <span>&gt;</span>
          <p>Buyurtma holati</p>
        </div>
        <div className='tracking-content'>
          <div className='tracking-content-registration'>
            <h2>Buyurtma holati</h2>
            <b>Buyurtmani ko'rish uchun kerakli maydonlarni to'ldiring. Buyurtma raqami sizning raqamingizga SMS-xabar shaklida yuborilgan</b>
            <input type="text" placeholder='BUYURMA RAQAMI' />
            <label htmlFor="tel">
              <p>Buyurtma berilgandagi telefon raqami <span>*</span></p>
              <input type="tel" name="" id="tel" />
            </label>
            <div className='capcha'>
              <ReCAPTCHA
                sitekey="6Le4qNkqAAAAADlnJGrpsNdMJpY5Q18947NNn86I" 
                onChange={handleRecaptchaChange}
              />
            </div>
            <button className='tracking-btn' disabled={!recaptchaValue}>Kirish</button>
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