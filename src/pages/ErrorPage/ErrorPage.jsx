import { Link } from 'react-router-dom'
import sinema from '../../assets/img/sinema.png'
import notFound from '../../assets/img/404.png'
import style from './ErrorPage.module.scss'
import classNames from 'classnames'
import { routesParth } from '../../utils/const/routes'

export default function ErrorPage() {
  return (
    <div className={classNames('', style.container)}>
      <div className={classNames('flex', style.position)}>
        <div className={style.img}>
          <img src={sinema} alt="" />
        </div>
        <div className="block">
          <div className={style.img}>
            <img src={notFound} alt="404" />
            <p>К сожалению такой страницы не существует</p>
          </div>
        </div>
      </div>

      <p className={style.subtitle}>
        Возможно вы пытаетесь загрузить несуществующую или удаленную страницу
      </p>
      <Link className={style.link} to={routesParth.Home}>
        Главная
      </Link>
    </div>
  )
}
