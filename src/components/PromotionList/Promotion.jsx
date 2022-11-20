import s from './PromotionList.module.scss'

const Promotion = ({ promotion }) => {
  return (
    <figure className={s.item}>
      <img src="https://picsum.photos/700/500" alt="" />

      <figcaption>
        <p>{promotion.name}</p>
        <p>{promotion.duration}</p>
      </figcaption>
    </figure>
  )
}

export default Promotion
