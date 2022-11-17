import { AiOutlinePlus } from 'react-icons/ai'
import Line from '../../common/Line/Line.jsx'
import './MovieEntry.scss'

const MovieEntry = ({ movie }) => {
  return (
    <>
      <Line />
      <div className="rep-movie">
        <AiOutlinePlus className="rep-movie-icon" />
        <div className="rep-movie-1">
          <p>{movie.title}</p>
          <p>{movie.availableSeats} wolnych miejsc</p>
        </div>
        <div className="rep-movie-2">
          <p>{movie.premierDate}</p>
          <p>{movie.premierTime}</p>
        </div>
      </div>
      <Line />
    </>
  )
}

export default MovieEntry
