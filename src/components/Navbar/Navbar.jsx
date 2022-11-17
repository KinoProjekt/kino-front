import './Navbar.scss'
import { FaRegLightbulb } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function CheckRoute() {
  const location = useLocation()
  return location.pathname
}

const Navbar = () => {
  const navigation = useNavigate()
  return (
    <nav className="nav-wrapper">
      <div className="nav-row">
        <div className="nav-left">
          <span className="nav-title">Multiverse©</span>
        </div>
        <div className="nav-right">
          <FaRegLightbulb className="nav-icon" />
          <FaRegUser className="nav-icon" />
        </div>
      </div>
      <div className="nav-row">
        <div className="nav-left-row">
          <div
            onClick={() => navigation('/repertuar')}
            className={`nav-menu ${
              CheckRoute() == '/repertuar' ? 'nav-active' : ''
            }`}
          >
            repertuar
          </div>
          <div
            onClick={() => navigation('/wydarzenia')}
            className={`nav-menu ${
              CheckRoute() == '/wydarzenia' ? 'nav-active' : ''
            }`}
          >
            wydarzenia
          </div>
          <div
            onClick={() => navigation('/promocje')}
            className={`nav-menu ${
              CheckRoute() == '/promocje' ? 'nav-active' : ''
            }`}
          >
            promocje
          </div>
          <div
            onClick={() => navigation('/wiadomosci')}
            className={`nav-menu ${
              CheckRoute() == '/wiadomosci' ? 'nav-active' : ''
            }`}
          >
            wiadomości
          </div>
        </div>
        <div className="nav-right">
          <span onClick={() => navigation('/')} className="nav-subtitle">
            Strona główna
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
