import s from './FilmList.module.scss'
import SearchInput from '../../common/SearchInput/SearchInput'
import MovieEntry from './MovieEntry'
import Button from '../../common/Button/Button'

const FilmList = () => {
  return (
    <div className={s.wrapperFilms}>
      <div className={s.rowFilms}>
        <div>
          <h1>NA EKRANIE W KINIE</h1>
          <SearchInput />
        </div>
        <div className='buttons'>
          <Button isActive={false}>W Repertuarze</Button>
          <Button isActive={true}>Premiery</Button>
        </div>
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
