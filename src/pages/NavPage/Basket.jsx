import React, { useEffect } from 'react'
import '@/styles/main.scss'
import { Link } from 'react-router-dom'

function Basket() {

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
        <div className="basket-empty">
          <img src="/assets/images/basket_no_page.webp" alt="" />
          <p>Savatda hozircha mahsulot yo'q.</p>
          <span>Bosh sahifadagi termalardan boshlang yoki kerakli mahsulotni qidiruv orqali toping.</span>
          <Link to='/' className="btn">Asosiy menyu</Link>
        </div>
      </div>
    </section>
  )
}

export default Basket