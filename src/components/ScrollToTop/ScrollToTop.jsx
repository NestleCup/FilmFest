import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { parthname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [parthname])
  return null
}
export default ScrollToTop
