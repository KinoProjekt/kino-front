import s from './News.module.scss'

const News = (props) => {
  return (
    <figure className={s.item}>
      <img src="https://picsum.photos/700/500" alt="" />

      <figcaption>
        <p>{props.name}</p>
        <p>{props.duration}</p>
      </figcaption>
    </figure>
  )
}

export default News
