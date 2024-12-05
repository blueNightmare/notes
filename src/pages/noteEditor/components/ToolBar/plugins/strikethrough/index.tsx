import * as React from 'react'
import Icon from '@/components/Icon'
import { PluginComponent } from '../plugin'

export default class StrikeThrough extends PluginComponent {
  static pluginName = 'strikethrough'

  static align: string = 'right'

  constructor(props: any) {
    super(props)
  }

  private handleInsertStrikeThrough() {
    console.log('insert strikethrough')
  }

  render() {
    return (
      <span className="button button-type-strikethrough" onClick={this.handleInsertStrikeThrough}>
        <Icon type="strikethrough" />
      </span>
    )
  }
}
