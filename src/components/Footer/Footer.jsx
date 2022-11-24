import s from './Footer.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigation = useNavigate()

  return (
    <div className={s.footer}>
      <div className="container">
        <span className={s.left}>2022 &copy; Multiverse</span>
        <span className={s.right} onClick={() => navigation('/team')}>
          o agencji
        </span>
      </div>
    </div>
  )
}
export default Footer
