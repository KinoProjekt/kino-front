import React from 'react'
import MainSite from '../views/MainSite/MainSite'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const PageNotFound = () => <Navigate to={'/'} />

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<MainSite />} />
        <Route path={'/repertuar'} element={<h1>Strona testowa</h1>} />
        <Route path={'/wydarzenia'} element={<h1>Strona testowa</h1>} />
        <Route path={'/promocje'} element={<h1>Strona testowa</h1>} />
        <Route path={'/wiadomosci'} element={<h1>Strona testowa</h1>} />
        <Route path={'/film/:filmName'} element={<h1>Strona testowa</h1>} />
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
