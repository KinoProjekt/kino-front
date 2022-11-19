import { AiOutlinePlus } from 'react-icons/ai'
import Line from '../../common/Line/Line.jsx'
import styles from './MovieEntry.module.scss'

const MovieEntry = ({ movie }) => {
  return (
    <>
      <Line />
      <div className={styles.movie}>
        <AiOutlinePlus  />
        <div>
          <p>{movie.title}</p>
          <p>{movie.availableSeats} wolnych miejsc</p>
        </div>
        <div>
          <p>{movie.premierDate}</p>
          <p>{movie.premierTime}</p>
        </div>
      </div>
      <Line />
    </>
  )
}

export default MovieEntry
