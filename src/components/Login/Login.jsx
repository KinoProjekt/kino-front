import { AiOutlineCaretRight } from 'react-icons/ai'
import s from './Login.module.scss'
import Button from '../../common/Button/Button'

const Login = () => {
  return (
    <>
      <div className={s.wrapperOuter + ' container'}>
        <h1>Zaloguj się, aby kontynuować przygodę</h1>
        <div className={s.wrapperInner}>
          <div>
            <input type="text" id="login" placeholder="LOGIN" />
            <input type="text" id="haslo" placeholder="HASŁO" />
          </div>
          <div>
            <Button isActive={true}>
              Zaloguj się <AiOutlineCaretRight />
            </Button>
            <hr></hr>
          </div>

          <div>
            <Button>Zaloguj się przez facebook</Button>
            <Button>Zaloguj się przez google </Button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login
