import * as React from 'react'
import Icon from '@/components/Icon'
import { PluginComponent } from '../plugin'

export default class Bold extends PluginComponent {
  static pluginName = 'bold'

  static align: string = 'right'

  constructor(props: any) {
    super(props)
  }

  private handleInsertBold() {
    console.log('insert bold')
  }

  render() {
    return (
      <span className="button button-type-bold" onClick={this.handleInsertBold}>
        <Icon type="bold" />
      </span>
    )
  }
}
