import React from 'react'
import s from './Navbar.module.scss'
import { FaRegLightbulb } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'

function CheckRoute() {
  const location = useLocation()
  return location.pathname
}

const Navbar = () => {
  const navigation = useNavigate()
  return (
    <div className={s.wrapper}>
      <nav className={s.navWrapper + ' container'}>
        <div className={s.navRow}>
          <div className={s.navLeft}>
            <span className={s.navTitle}>
              Multiverse<sup>©</sup>
            </span>
          </div>
          <div className={s.navRight}>
            <FaRegLightbulb className={s.navIcon} />
            <div className={s.navLine} />
            <FaRegUser className={s.navIcon} />
          </div>
        </div>
        <div className={s.navRow}>
          <div className={s.navLeftRow}>
            <div
              onClick={() => navigation('/repertuar')}
              className={`${s.navMenu} ${
                CheckRoute() == '/repertuar' ? `${s.navActive}` : ''
              }`}
            >
              repertuar
            </div>
            <div
              onClick={() => navigation('/wydarzenia')}
              className={`${s.navMenu} ${
                CheckRoute() == '/wydarzenia' ? `${s.navActive}` : ''
              }`}
            >
              wydarzenia
            </div>
            <div
              onClick={() => navigation('/promocje')}
              className={`${s.navMenu} ${
                CheckRoute() == '/promocje' ? `${s.navActive}` : ''
              }`}
            >
              promocje
            </div>
            <div
              onClick={() => navigation('/wiadomosci')}
              className={`${s.navMenu} ${
                CheckRoute() == '/wiadomosci' ? `${s.navActive}` : ''
              }`}
            >
              wiadomości
            </div>
          </div>
          <div className={s.navRight}>
            <span onClick={() => navigation('/')} className={s.navSubtitle}>
              strona główna
            </span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
