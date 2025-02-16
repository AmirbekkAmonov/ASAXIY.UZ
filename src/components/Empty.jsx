import React, { useEffect } from 'react'
import '@/styles/main.scss'
import { useNavigate } from 'react-router-dom'

function Empty() {
  const navigete = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className='empty'>
      <h5 className='empty-text'>Malulotlar hali qo'shilmagan!</h5>
      <div className='empty-btns'>
        <button onClick={() => navigete("/")} className='btn'>Asosiy sahifaga o'tish</button>
        <button onClick={() => navigete(-1)} className='btn'>Orqaga qaytish</button>
      </div>
    </section>

  )
}

export default Empty