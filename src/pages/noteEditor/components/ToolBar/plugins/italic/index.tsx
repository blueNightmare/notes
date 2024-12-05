import * as React from 'react'
import Icon from '@/components/Icon'
import { PluginComponent } from '../plugin'

export default class Italic extends PluginComponent {
  static pluginName = 'italic'

  static align: string = 'right'

  constructor(props: any) {
    super(props)
    this.handleSetItalic = this.handleSetItalic.bind(this)
  }

  private handleSetItalic() {
    this.editor.commands.setItalic()
  }

  render() {
    return (
      <span className="button button-type-italic" onClick={this.handleSetItalic}>
        <Icon type="italic" />
      </span>
    )
  }
}
