import { Selection } from 'prosemirror-state'
import { Node } from 'prosemirror-model'
import { findParentNode } from 'prosemirror-utils'

export function getCurBlock(selection: Selection) {
  const predicate = (node: Node) => node.type.name === 'block_layout'
  const currentBlockTile = findParentNode(predicate)(selection)
  return currentBlockTile
}
