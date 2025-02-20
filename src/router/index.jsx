import Empty from '@/components/Empty'
import ProductDetail from '@/components/ProductDetail'
import Basket from '@/pages/NavPage/Basket'
import Comparison from '@/pages/NavPage/Comparison'
import Department from '@/pages/NavPage/Department'
import Favorite from '@/pages/NavPage/Favorite'
import Payment from '@/pages/NavPage/Payment'
import Tracking from '@/pages/NavPage/Tracking'
import NotFound from '@/pages/NotFound'
import Home from '@/pages/Home'
import Layout from '@/components/layout/Layout'
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Context } from '@/context';


function Router() {
  const { search, setSearch, modal, setModal } = useContext(Context);
  return (
    <Routes>
      <Route path="/" element={<Layout setSearch={setSearch} setModal={setModal} modal={modal} />}>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/department" element={<Department />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path='/empty' element={<Empty />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default Router