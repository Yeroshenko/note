import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { BaseEditor, createEditor, Descendant } from 'slate'
import { Editable, ReactEditor, Slate, withReact } from 'slate-react'
import { HistoryEditor } from 'slate-history'

import { CustomElement, CustomText } from 'types/editor-types'
import { DefaultText, HoveringToolbar, Leaf } from 'components'
import S from './styles.module.sass'


declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
    Text: CustomText
  }
}

export const Editor: FC = () => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Descendant[]>([{
    type: 'paragraph',
    children: [{ text: '' }]
  }])

  useEffect(() => {
    const storageValue = localStorage.getItem('noteId')

    storageValue && setValue(JSON.parse(storageValue))

  }, [])

  const renderElement = useCallback(props => {
    switch (props.element.type) {

      default:
        console.log(props)
        return <DefaultText {...props} />
    }
  }, [])


  const editHandler = ((newValue: Descendant[]) => {
    setValue(newValue)
    localStorage.setItem('noteId', JSON.stringify(newValue))
  })

  return (
    <div className={S.container}>
      <Slate
        editor={editor}
        value={value}
        onChange={editHandler}
      >
        <HoveringToolbar />
        <Editable
          placeholder='Type your text...'
          renderElement={renderElement}
          renderLeaf={props => <Leaf {...props} />}
        />
      </Slate>
    </div>
  )
}
