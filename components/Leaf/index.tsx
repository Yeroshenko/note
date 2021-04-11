import { CustomText } from '../../types/editor-types'
import React, { FC } from 'react'

type LeafProps = {
  leaf: CustomText
  attributes: {
    'data-slate-leaf': true
  }
}

export const Leaf: FC<LeafProps> = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}
