import './FilmList.scss'
import Line from '../../common/Line/Line.jsx'
import SearchInput from '../../common/SearchInput/SearchInput'

const FilmList = () => {
  return (
    <div className="wrapper-films">
      <div className="row-films">
        <span className="title-films">NA EKRANIE W KINIE</span>
        <SearchInput/>
      </div>
      <Line />
    </div>
  )
}

export default FilmList
