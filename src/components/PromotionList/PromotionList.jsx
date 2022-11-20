import s from './PromotionList.module.scss'
import Promotion from './Promotion'

const PromotionList = () => {
  return (
    <div className={s.wrapper}>
      <h1>Nasze promocje</h1>

      <div className={s.promWrapper}>
        {promotions.map((el) => (
          <Promotion promotion={el} key={el.id} />
        ))}
      </div>
    </div>
  )
}

const promotions = [
  {
    id: 1,
    name: 'Promocja dla studentów',
    duration: 'do 26 roku życia',
  },
  {
    id: 2,
    name: 'Bonifikarta',
    duration: 'na okres 3 miesięcy',
  },
  {
    id: 3,
    name: 'Promocje frozen fanta',
    duration: 'do wyczerpania zapasów',
  },
  {
    id: 4,
    name: 'Promocja dla studentów',
    duration: 'do 26 roku życia',
  },
  {
    id: 5,
    name: 'Bonifikarta',
    duration: 'na okres 3 miesięcy',
  },
  {
    id: 6,
    name: 'Bonifikarta',
    duration: 'na okres 3 miesięcy',
  },
]

export default PromotionList
