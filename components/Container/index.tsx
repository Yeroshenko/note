import React, { FC } from 'react'
import cn from 'classnames'

import S from './styles.module.sass'

type ContainerProps = {
  className?: string
}

export const Container: FC<ContainerProps> = ({ children, className }) => (
  <div className={cn(S.container, className)}>{children}</div>
)

