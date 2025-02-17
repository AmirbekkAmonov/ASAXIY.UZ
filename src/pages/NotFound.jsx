import React from 'react'
import '@/styles/main.scss'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='notfound'>
        <div className="container">
         <div className="notfound-content">
         <img src="/assets/images/img-error.svg" alt="" />
            <h1>Sahifa topilmadi!</h1>
            <p>Xavotirlanmang va xarid qilishda davom eting</p>
            <Link to="/">Bosh sahifa</Link>
         </div>
        </div>
    </div>
  )
}

export default NotFound