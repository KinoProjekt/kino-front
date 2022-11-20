import s from './Event.module.scss';

const Event = ({event}) => {
  return (
    <div className={s.event}>
      <p>{event.name}</p>
      <p>{event.date}</p>
    </div>
  )
}

export default Event