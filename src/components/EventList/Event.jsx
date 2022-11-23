import s from './Event.module.scss'

const Event = ({ event }) => {
  return (
    <div className={s.event}>
      <div className="container">
        <p>{event.name}</p>
        <p>{event.date}</p>
      </div>
    </div>
  )
}

export default Event
