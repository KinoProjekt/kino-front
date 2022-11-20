import s from './EventList.module.scss'
import Event from './Event'

const EventList = () => {
  return (
    <div className={s.eventListWrapper}>
      <h1>Polecane wydarzenia</h1>

      {events.map((el) => (
        <Event event={el} key={el.id} />
      ))}
    </div>
  )
}

const events = [
  {
    id: 1,
    name: 'Mundial 2022 lorem ipsum dolor',
    date: '14/11/2022',
  },
  {
    id: 2,
    name: 'Liam Gallagher dolor ipsum',
    date: '14/11/2022',
  },
  {
    id: 3,
    name: 'NCD DREAM THE MOVIE: In A DREAM',
    date: '14/11/2022',
  },
  {
    id: 4,
    name: 'ANDRE RIEU: Lorem ipsum dolor sit amet.',
    date: '14/11/2022',
  },
]

export default EventList
