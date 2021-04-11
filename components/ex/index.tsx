import React, { FC } from 'react'
import cn from 'classnames'

import S from './styles.module.sass'

type ExProps = {
  className?: string
}

export const Ex: FC<ExProps> = ({ children, className }) => (
  <div className={cn(S.container, className)}>{children}</div>
)

