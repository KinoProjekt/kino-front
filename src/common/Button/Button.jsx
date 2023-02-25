import s from './Button.module.scss'

function Button({ children, isActive }) {
  return (
    <button className={`${s.btn} ${isActive ? s.btnActive : ''}`}>
      {children} 
    </button>
  )
}

export default Button
