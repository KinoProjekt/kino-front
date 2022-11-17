import Magnifying from '../../static/icons/MagnifyingGlass'
import './SearchInput.scss'

const SearchInput = () => {
  return (
    <div className="input-wrapper">
      <input className="searchInput" type="text" placeholder='Tytuł szukanego filmu...'/>
      <Magnifying className="icon" />
    </div>
  )
}

export default SearchInput
