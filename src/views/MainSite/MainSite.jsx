// import s from './MainSite.module.scss'
import { ScrollButton } from '../../common/ScrollButton/ScrollButton'
import {FilmList, EventList, PromotionList} from '../../components/'

const MainSite = () => {
  return (
    <>
      <FilmList />
      <ScrollButton />
      <EventList />
      <PromotionList />
    </>
  )
}

export default MainSite
