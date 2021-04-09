import { FC } from 'react'
import ReactDOM from 'react-dom'

export const Portal: FC = ({ children }) => {
  return typeof document === 'object'
    ? ReactDOM.createPortal(children, document.body)
    : null
}
