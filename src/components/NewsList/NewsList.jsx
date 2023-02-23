import s from './NewsList.module.scss'
import News from './News'

const NewsList = (props) => {
  return (
    <div className={s.wrapper + " container"}>
      <h1>Najnowsze wiadomości i aktualności</h1>

      <div className={s.newsWrapper}>
        {news.map((el) => (
          <News name={el.name} duration={el.duration} key={el.id} />
        ))}
      </div>
    </div>
  )
}

const news = [
  {
    id: 1,
    name: 'UWAGA',
    duration: 'Kewin patelczyk zesrał sie w gacie.',
  },
  {
    id: 2,
    name: 'WOOW',
    duration: 'Strona kina jednak zyje',
  },
  {
    id: 3,
    name: 'NIEMOZLIWE',
    duration: 'a jednak...',
  },
  {
    id: 4,
    name: 'UWAGA',
    duration: 'Kewin patelczyk zesrał sie w gacie.',
  },
  {
    id: 5,
    name: 'WOOW',
    duration: 'Strona kina jednak zyje',
  },
  {
    id: 6,
    name: 'NIEMOZLIWE',
    duration: 'a jednak...',
  },
]
export default NewsList
