import s from './FilmList.module.scss'
import SearchInput from '../../common/SearchInput/SearchInput'
import MovieEntry from './MovieEntry'

const FilmList = () => {
  return (
    <div className={s.wrapperFilms}>
      <div className={s.rowFilms}>
        <span className={s.titleFilms}>NA EKRANIE W KINIE</span>
        <SearchInput />
      </div>

      <div>
        {movies.map((movie) => {
          return <MovieEntry key={movie.title} movie={movie} />
        })}
      </div>
    </div>
  )
}

const movies = [
  {
    title: 'Avatar: Istota Wody',
    availableSeats: 1,
    premierDate: '14/11/2022',
    premierTime: '20:00',
  },
  {
    title: 'Dzika noc',
    availableSeats: 17,
    premierDate: '14/11/2022',
    premierTime: '18:00',
  },
  {
    title: 'Bella i Sebastian: Nowe Pokolenie',
    availableSeats: 2,
    premierDate: '15/11/2022',
    premierTime: '20:00',
  },
  {
    title: 'Kierunek księżyc',
    availableSeats: 32,
    premierDate: '15/11/2022',
    premierTime: '18:00',
  },
]

export default FilmList
