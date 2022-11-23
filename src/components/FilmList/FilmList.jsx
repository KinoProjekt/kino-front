import s from './FilmList.module.scss'
import SearchInput from '../../common/SearchInput/SearchInput'
import MovieEntry from './MovieEntry'
import Button from '../../common/Button/Button'
import DatePicker from '../../common/DatePicker/DatePicker'
import ComboBox from '../../common/ComboBox/ComboBox'
import { useState, useRef } from 'react'

let noMore = false

const FilmList = (props) => {
  //scroll
  const scrollRef = useRef(null)
  const executeScroll = () =>
    scrollRef.current.scrollIntoView({
      behavior: 'smooth',
    })

  //adding films by button press
  const [genMovies, setGenMovies] = useState(firstMovies)

  if (genMovies.length != allMovies.length) {
    noMore = false
  }

  function showMore() {
    for (let i = genMovies.length; i < genMovies.length + 4; i++) {
      if (i < allMovies.length) {
        setGenMovies((current) => [...current, allMovies[i]])
      } else {
        noMore = true
      }
    }
    setTimeout(() => {
      executeScroll()
    }, 1)
  }

  return (
    <div>
      <div className={s.wrapperFilms + " container"}>
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
          {genMovies.map((movie) => {
            return <MovieEntry key={movie.title} movie={movie} />
          })}
          {props.isMainSite && !noMore && (
            <div className={s.popup}>
              <div ref={scrollRef} className={s.showMore} onClick={showMore}>
                Pokaz więcej
              </div>
            </div>
          )}
          {props.isMainSite && noMore && (
            <div className={s.popup}>
              <div ref={scrollRef} className={s.noMore} onClick={showMore}>
                Nie znaleziono więcej filmów...
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const firstMovies = [
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

const allMovies = [
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
  {
    title: 'Skazani na Shawshank',
    availableSeats: 32,
    premierDate: '15/11/2022',
    premierTime: '18:00',
  },
  {
    title: 'Se7en',
    availableSeats: 32,
    premierDate: '15/11/2022',
    premierTime: '18:00',
  },
  {
    title: 'Milczenie owiec',
    availableSeats: 32,
    premierDate: '15/11/2022',
    premierTime: '18:00',
  },
  {
    title: 'Fightclub',
    availableSeats: 32,
    premierDate: '15/11/2022',
    premierTime: '18:00',
  },
  {
    title: 'Nobody',
    availableSeats: 32,
    premierDate: '15/11/2022',
    premierTime: '18:00',
  },
]

const options = [
  { label: 'Wejherowo' },
  { label: 'Gdańsk' },
  { label: 'Kraków' },
]
const label = 'Wybierz miasto...'

export default FilmList
