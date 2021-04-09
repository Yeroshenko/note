import { BaseEditor, Descendant } from 'slate'
import { ReactEditor } from 'slate-react'
import { HistoryEditor } from 'slate-history'

type ParagraphElement = {
  type: 'paragraph'
  children: Descendant[]
}


export type TextFormat = 'bold' | 'italic' | 'underline'

export type CustomText = {
  text: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
}

export type CustomElement =
  | ParagraphElement


export type SlatEditor = BaseEditor & ReactEditor & HistoryEditor

declare module 'slate' {
  interface CustomTypes {
    Editor: SlatEditor
    Element: CustomElement
    Text: CustomText
  }
}
