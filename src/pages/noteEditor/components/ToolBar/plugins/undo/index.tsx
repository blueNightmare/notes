import * as React from 'react'
import Icon from '@/components/Icon'
import { PluginComponent } from '../plugin'

export default class Undo extends PluginComponent {
  static pluginName = 'undo'

  private handleUndo() {
    console.log('undo')
  }

  render() {
    return (
      <span className={'button button-type-undo'} onClick={this.handleUndo}>
        <Icon type="undo" />
      </span>
    )
  }
}
