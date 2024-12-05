import { Schema } from 'prosemirror-model'
import { EditorView } from 'prosemirror-view'
import { EditorState, Transaction } from 'prosemirror-state'
import { keymap } from 'prosemirror-keymap'
import { history, undo, redo } from 'prosemirror-history'
import { baseKeymap } from 'prosemirror-commands'
import { schema } from './schema'
import { Commands } from './commands'

import { EditorOptions } from './types'

export class Editor {
  public schema!: Schema

  public view!: EditorView

  public commands!: Commands

  public options: EditorOptions = {
    element: document.createElement('div'),
    onTransaction: () => null,
  }

  constructor(options: Partial<EditorOptions> = {}) {
    this.setOptions(options)
    this.createSchema()
    this.createView()
    this.createCommands()
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
    this.schema = schema
  }

  private createView() {
    const { element } = this.options
    this.view = new EditorView(element, {
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: EditorState.create({
        schema: this.schema,
      }),
    })

    const newState = this.state.reconfigure({
      plugins: [keymap(Commands.keyMap()), history(), keymap({ 'Mod-z': undo, 'Mod-y': redo })],
    })

    this.view.updateState(newState)
  }

  private createCommands() {
    this.commands = new Commands({
      view: this.view,
    })
  }

  private dispatchTransaction(transaction: Transaction) {
    const state = this.state.apply(transaction)
    this.view.updateState(state)
    this.view.focus()
  }
}
