import { FC, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export const Portal: FC = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  // @ts-ignore
  return ReactDOM.createPortal(children, document.querySelector('#portal'))
}
