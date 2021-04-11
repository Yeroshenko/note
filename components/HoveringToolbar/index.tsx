import React, { FC, useEffect, useRef } from 'react'
import { ReactEditor, useSlate } from 'slate-react'
import { Editor, Range, Text, Transforms } from 'slate'
import cn from 'classnames'

import { SlatEditor, TextFormat } from 'types/editor-types'
import { Portal } from 'components'
import S from './styles.module.sass'

type HoveringToolbarProps = {
  className?: string
}


const toggleFormat = (editor: SlatEditor, format: TextFormat) => {
  const isActive = isFormatActive(editor, format)
  Transforms.setNodes(
    editor,
    { [format]: isActive ? null : true },
    { match: Text.isText, split: true }
  )
}

const isFormatActive = (editor: SlatEditor, format: TextFormat) => {
  // @ts-ignore
  const [match] = Editor.nodes(editor, {
    // @ts-ignore
    match: n => n[format] === true,
    mode: 'all'
  })
  return !!match
}

export const HoveringToolbar: FC<HoveringToolbarProps> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null)
  const editor = useSlate()

  useEffect(() => {
    const el = ref.current
    const { selection } = editor

    if (!el) {
      return
    }

    if (
      !selection
      || !ReactEditor.isFocused(editor)
      || Range.isCollapsed(selection)
      || Editor.string(editor, selection) === ''
    ) {
      el.removeAttribute('style')
      return
    }

    const domSelection = window.getSelection()
    const domRange = domSelection?.getRangeAt(0)
    if (domRange) {
      const { left, top } = domRange.getBoundingClientRect()

      el.style.opacity = '1'
      el.style.top = `${top + window.pageYOffset - el.offsetHeight}px`
      el.style.left = `${left + window.pageXOffset}px`
    }
  })

  return (
    <Portal>
      <div ref={ref} className={cn(S.toolbar, className)}>
        <FormatButton format='bold'>bold</FormatButton>
        <FormatButton format='italic'>italic</FormatButton>
        <FormatButton format='underline'>underline</FormatButton>
      </div>
    </Portal>
  )
}


type FormatButtonProps = {
  format: TextFormat
}

const FormatButton: FC<FormatButtonProps> = ({ format, children }) => {
  const editor = useSlate()

  return (
    <button
      style={{ padding: '10px', color: 'white' }}
      onMouseDown={event => {
        event.preventDefault()
        toggleFormat(editor, format)
      }}>
      {children}
    </button>
  )
}
