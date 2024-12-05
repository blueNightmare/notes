import * as React from 'react'
import Icon from '@/components/Icon'
import { PluginComponent } from '../plugin'

export default class Italic extends PluginComponent {
  static pluginName = 'italic'

  static align: string = 'right'

  constructor(props: any) {
    super(props)
  }

  private handleInsertItalic() {
    console.log('insert italic')
  }

  render() {
    return (
      <span className="button button-type-italic" onClick={this.handleInsertItalic}>
        <Icon type="italic" />
      </span>
    )
  }
}
