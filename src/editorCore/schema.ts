import { Schema } from 'prosemirror-model'

export const schema = new Schema({
  topNode: 'doc',
  nodes: {
    doc: {
      content: 'block_layout+',
    },
    block_layout: {
      content: 'block',
      group: 'block_layout',
      inline: false,
      toDOM: () => ['div', { class: 'block' }, 0],
    },
    paragraph: {
      content: 'inline*',
      group: 'block',
      toDOM: () => ['p', 0],
    },
    heading: {
      content: 'inline*',
      group: 'block',
      attrs: {
        level: {
          default: 1,
        },
      },
      toDOM: node => {
        const tag = `h${node.attrs.level}`
        return [tag, 0]
      },
    },
    text: {
      group: 'inline',
    },
  },
  marks: {
    bold: {
      toDOM: () => ['strong', 0],
    },
    italic: {
      toDOM: () => ['em', 0],
    },
    underline: {
      toDOM: () => ['u', 0],
    },
  },
})
