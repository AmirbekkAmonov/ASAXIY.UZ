import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Empty from '@/components/Empty';
import Layout from '@/components/layout/Layout';
import PraductDetail from '@/components/ProductDetail';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Login from '@/pages/NavPage/Login';
import Department from '@/pages/NavPage/Department';
import Comparison from '@/pages/NavPage/Comparison';
import Payment from '@/pages/NavPage/Payment';
import Tracking from './pages/NavPage/Tracking';
import Basket from './pages/NavPage/Basket';
import Favorite from './pages/NavPage/Favorite';


function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout setSearch={setSearch} />}>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/department" element={<Department />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path='/empty' element={<Empty />} />
          <Route path='/product/:id' element={<PraductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>

  )
}

export default App;
