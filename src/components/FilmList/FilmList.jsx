import s from './FilmList.module.scss'
import SearchInput from '../../common/SearchInput/SearchInput'
import MovieEntry from './MovieEntry'
import Button from '../../common/Button/Button'
import DatePicker from '../../common/DatePicker/DatePicker'
import ComboBox from '../../common/ComboBox/ComboBox'

const FilmList = (props) => {
  return (
    <div className={s.wrapperFilms}>
      <div className={s.rowFilms}>
        <div>
          {!props.isMainSite && <h1>NA EKRANIE KINA</h1>}
          {props.isMainSite && <h1>REPERTUAR KINA</h1>}
          <SearchInput />
        </div>
        <div>
          <div>
            <Button isActive={false}>W Repertuarze</Button>
            <Button isActive={true}>Premiery</Button>
          </div>
          <div className={s.column}>
            <ComboBox options={options} label={label} />
            <DatePicker />
          </div>
        </div>
      </div>
      <div>
        {movies.map((movie) => {
          return <MovieEntry key={movie.title} movie={movie} />
        })}
        {props.isMainSite && (
          <div className={s.popup}>
            <div className={s.showMore} onClick={showMore}>
              Pokaz więcej
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function showMore() {
  alert('test')
}

const options = [
  { label: 'Wejherowo' },
  { label: 'Gdańsk' },
  { label: 'Kraków' },
]
const label = 'Wybierz miasto...'

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
