import React from 'react'
import '@/styles/main.scss'
import Filter from '@/components/Filter'
import Product from './Product'


function Home({ search }) {
  return (
    <section className='home'>
      <div className='container'>
        <Product search={search}/>
      </div>
    </section>
  )
}

export default Home