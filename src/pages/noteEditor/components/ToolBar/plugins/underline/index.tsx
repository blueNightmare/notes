import * as React from 'react'
import Icon from '@/components/Icon'
import { PluginComponent } from '../plugin'

export default class underline extends PluginComponent {
  static pluginName = 'underline'

  static align: string = 'right'

  constructor(props: any) {
    super(props)
    this.handleSetUnderline = this.handleSetUnderline.bind(this)
  }

  private handleSetUnderline() {
    this.editor.commands.setUnderline()
  }

  render() {
    return (
      <span className="button button-type-underline" onClick={this.handleSetUnderline}>
        <Icon type="underline" />
      </span>
    )
  }
}
