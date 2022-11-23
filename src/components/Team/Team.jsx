import s from './Team.module.scss'
import kamil from './images/kamil.jpg'
import kiril from './images/kiril.jpg'
import stachu from './images/stachu.png'
import kewin from './images/kewin.jpg'
import maciek from './images/maciek.jpg'
import wojtas from './images/wojtas.jpg'
import kuba from './images/kuba.jpg'
import { BsArrowRight } from 'react-icons/bs'

const Link = ({ href, name }) => {
  return (
    <a className={s.link} href={href}>
      <div className={s.leftLink}>{name}</div>
      <div className={s.rightLink}>
        <BsArrowRight />
      </div>
    </a>
  )
}

const Card = ({ src, name, tags }) => {
  return (
    <div className={s.card}>
      <div className={s.top}>
        <div className={s.imgWrapper}>
          <img src={src} alt="" />
        </div>
        <div>
          <p>{name}</p>
          <div className={s.tags}>
            {tags.map((el) => (
              <p>{el}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={s.bottom}>
        <Link href="https://www.behance.net" name="Behance" />
        <Link href="https://www.github.com/" name="Github" />
        <Link href="https://www.instagram.com" name="Instagram" />
      </div>
    </div>
  )
}

const Team = () => {
  return (
    <div>
      <div className={s.wrapper + " container"}>
        <h1>Zgrany zespół to podstawa</h1>

        <div className={s.grid}>
          <Card
            src={kamil}
            name="Kamil Klawikowski"
            tags={['Product designer', 'ui/ux', 'web designer']}
          />
          <Card
            src={kiril}
            name="Kiril Chyżawski"
            tags={['frontend engineer', 'react', 'css/sass']}
          />
          <Card
            src={stachu}
            name="Stanisław Bożych"
            tags={['frontend engineer', 'react', 'vue', 'css/sass']}
          />
          <Card
            src={kewin}
            name="Kewin Patelczyk"
            tags={['backend engineer', 'lead', 'c#']}
          />
          <Card
            src={maciek}
            name="Maciej Piechocki"
            tags={['backend engineer', 'database', 'c#']}
          />
          <Card
            src={wojtas}
            name="Oskar Nierzwicki"
            tags={['backend engineer', 'database', 'c#']}
          />
          <Card
            src={kuba}
            name="Jakub Cierocki"
            tags={['backend engineer', 'dev/ops', 'python']}
          />
        </div>
      </div>
    </div>
  )
}

export default Team
