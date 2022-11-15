import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const PageNotFound = () => <Navigate to={'/'} />

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<h1>Strona Główna</h1>} />
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
