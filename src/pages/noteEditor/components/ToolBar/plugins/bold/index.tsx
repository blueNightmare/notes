import * as React from 'react'
import Icon from '@/components/Icon'
import { PluginComponent } from '../plugin'

export default class Bold extends PluginComponent {
  static pluginName = 'bold'

  static align: string = 'right'

  constructor(props: any) {
    super(props)
    this.handleSetBold = this.handleSetBold.bind(this)
  }

  private handleSetBold() {
    this.editor.commands.setBold()
  }

  render() {
    return (
      <span className="button button-type-bold" onClick={this.handleSetBold}>
        <Icon type="bold" />
      </span>
    )
  }
}
