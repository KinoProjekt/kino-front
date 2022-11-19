import s from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={s.footer}>
      <span className={s.left}>2022 © Multiverse</span>
      <span className={s.right}>O agencji</span>
    </div>
  )
}
export default Footer
