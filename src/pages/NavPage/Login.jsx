import React from 'react'
import '@/styles/main.scss'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigete = useNavigate();
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

export default Login