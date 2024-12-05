import * as React from 'react'
import Icon from '@/components/Icon'
import { PluginComponent } from '../plugin'

export default class Redo extends PluginComponent {
  static pluginName = 'redo'

  private handleRedo() {
    console.log('redo')
  }

  render() {
    return (
      <span className={'button button-type-redo'} onClick={this.handleRedo}>
        <Icon type="redo" />
      </span>
    )
  }
}
