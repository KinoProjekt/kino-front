import './Navbar.scss'
import { FaRegLightbulb } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

function CheckRoute() {
  const location = useLocation()
  return location.pathname
}

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="row">
        <div className="left">
          <span className="title">Multiverse©</span>
        </div>
        <div className="right">
          <FaRegLightbulb className="icon" />
          <FaRegUser className="icon" />
        </div>
      </div>
      <div className="row">
        <div className="left-row">
          <div className={`menu ${CheckRoute() == "/repertuar" ? "active" : ""}`}>repertuar</div>
          <div className={`menu ${CheckRoute() == "/wydarzenia" ? "active" : ""}`}>wydarzenia</div>
          <div className={`menu ${CheckRoute() == "/promocje" ? "active" : ""}`}>promocje</div>
          <div className={`menu ${CheckRoute() == "/wiadomosci" ? "active" : ""}`}>wiadomości</div>
        </div>
        <div className="right">
          <span className="subtitle">Strona główna</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
