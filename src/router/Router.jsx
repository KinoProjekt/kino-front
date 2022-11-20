import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainSite, PageNotFound, Repertuar } from '../views'
import { Navbar, Footer } from '../components'

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<MainSite />} />
        <Route path={'/repertuar'} element={<Repertuar />} />
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
