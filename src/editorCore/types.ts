import { Transaction } from 'prosemirror-state'
import { Editor } from './Editor'

export interface EditorEvents {
  transaction: { editor: Editor; transaction: Transaction }
}

export interface EditorOptions {
  element: Element
  onTransaction: (props: EditorEvents['transaction']) => void
}
