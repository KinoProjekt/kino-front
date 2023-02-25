import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  MainSite,
  PageNotFound,
  Repertuar,
  Events,
  News,
  Promotions,
} from '../views'
import { Navbar, Footer, Team, Login } from '../components'

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<MainSite />} />
        <Route path={'/repertuar'} element={<Repertuar />} />
        <Route path={'/wydarzenia'} element={<Events />} />
        <Route path={'/promocje'} element={<Promotions />} />
        <Route path={'/login'} element={<Login/>} />
        <Route path={'/wiadomosci'} element={<News />} />
        <Route path={'/film/:filmName'} element={<h1>Strona testowa</h1>} />
        <Route path={'/team'} element={<Team />} />
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
