import * as React from 'react'
import Icon from '@/components/Icon'
import { PluginComponent } from '../plugin'

export default class underline extends PluginComponent {
  static pluginName = 'underline'

  static align: string = 'right'

  constructor(props: any) {
    super(props)
  }

  private handleInsertUnderline() {
    console.log('insert underline')
  }

  render() {
    return (
      <span className="button button-type-underline" onClick={this.handleInsertUnderline}>
        <Icon type="underline" />
      </span>
    )
  }
}
