import s from './Button.module.scss'

function Button({ children, isActive }) {
  const styling = {
    background: isActive ? '#6C63FF' : 'transparent',
    color: isActive ? 'white' : 'black',
  }

  return (
    <button className={s.btn} style={styling}>
      {children}
    </button>
  )
}

export default Button
