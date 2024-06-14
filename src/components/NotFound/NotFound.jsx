import style from './NotFound.module.scss'
import { useRouteError } from 'react-router-dom'
export const NotFound = () => {
  const error = useRouteError()
  return (
    <div>
      <p style={{ color: 'red', fontSize: '30px' }}>
        {error.status == '400' ? '400 Page Not Found' : ''}
      </p>
    </div>
  )
}
