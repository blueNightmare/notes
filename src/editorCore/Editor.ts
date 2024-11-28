import { Schema } from 'prosemirror-model'
import { EditorView } from 'prosemirror-view'
import { EditorState, Transaction } from 'prosemirror-state'
import { EditorOptions } from './types'

export class Editor {
  public schema!: Schema

  public view!: EditorView

  public options: EditorOptions = {
    element: document.createElement('div'),
    onTransaction: () => null,
  }

  constructor(options: Partial<EditorOptions> = {}) {
    this.setOptions(options)
    this.createSchema()
    this.createView()
  }

  public setOptions(options: Partial<EditorOptions> = {}): void {
    this.options = {
      ...this.options,
      ...options,
    }
  }

  public get state(): EditorState {
    return this.view.state
  }

  private createSchema() {
    this.schema = new Schema({
      nodes: {
        doc: {
          content: 'block+',
        },
        paragraph: {
          content: 'inline*',
          group: 'block',
          toDOM: () => {
            return ['p', 0]
          },
          parseDOM: [
            {
              tag: 'p',
            },
          ],
        },
        text: {
          group: 'inline',
        },
      },
    })
  }

  private createView() {
    const { element } = this.options
    this.view = new EditorView(element, {
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: EditorState.create({
        schema: this.schema,
      }),
    })
  }

  private dispatchTransaction(transaction: Transaction) {
    const state = this.state.apply(transaction)
    this.view.updateState(state)
  }
}
