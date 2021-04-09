import React, { FC } from 'react'

export type DefaultTextProps = {
  attributes: {
    'data-slate-node': 'element'
  }
}

export const DefaultText: FC<DefaultTextProps> = ({ attributes, children }) => (
  <p {...attributes}>{children}</p>
)

