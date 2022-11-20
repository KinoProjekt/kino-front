import s from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={s.footer}>
      <span className={s.left}>2022 &copy; Multiverse</span>
      <span className={s.right}>o agencji</span>
    </div>
  )
}
export default Footer
