import Magnifying from '../../static/icons/MagnifyingGlass'
import s from './SearchInput.module.scss'

const SearchInput = () => {
  return (
    <div className={s.inputWrapper}>
      <input
        className={s.SearchInput}
        type="text"
        placeholder="Tytuł szukanego filmu..."
      />
      <Magnifying />
    </div>
  )
}

export default SearchInput
