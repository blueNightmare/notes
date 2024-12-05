import { EditorView } from 'prosemirror-view'
import { Fragment, Slice, Node } from 'prosemirror-model'
import { ReplaceAroundStep } from 'prosemirror-transform'
import { TextSelection, Command, EditorState, Transaction } from 'prosemirror-state'
import { getCurBlock } from '../utils'

interface CommandsProps {
  view: EditorView
}

export class Commands {
  private view: EditorView

  constructor(props: CommandsProps) {
    const { view } = props
    this.view = view
  }

  public insertHeading(level: string) {
    const { state, dispatch } = this.view
    const { selection, tr, schema } = state
    const { node, pos } = (getCurBlock(selection) as unknown) as { node: Node; pos: number }
    const from = pos + 1
    const to = pos + node.nodeSize - 1
    const gapFrom = from + 1
    const gapTo = to - 1
    const headerNode = schema.nodes['heading'].create({ level })
    const replaceAroundStep = new ReplaceAroundStep(
      from,
      to,
      gapFrom,
      gapTo,
      new Slice(Fragment.from(headerNode), 0, 0),
      1,
      false
    )
    tr.step(replaceAroundStep)
    const $from = tr.doc.resolve(selection.from)
    const $to = tr.doc.resolve(selection.to)
    tr.setSelection(new TextSelection($from, $to))
    dispatch(tr)
  }

  public static keyMap(): { [key: string]: Command } {
    return {
      Enter: Commands.handleEnter,
      'Mod-Enter': Commands.handleEnter,
    }
  }

  public static handleEnter(state: EditorState, dispatch?: (tr: Transaction) => void): boolean {
    const { selection, schema, tr } = state
    const { node, pos } = (getCurBlock(selection) as unknown) as { node: Node; pos: number }
    const endPos = pos + node.nodeSize
    const blockNode = schema.nodes['block_layout'].create(
      {},
      schema.nodes['paragraph'].create(null)
    )
    tr.replaceWith(endPos, endPos, blockNode)
    const $pos = tr.doc.resolve(endPos + 1)
    tr.setSelection(new TextSelection($pos, $pos))
    dispatch && dispatch(tr)
    return false
  }
}
