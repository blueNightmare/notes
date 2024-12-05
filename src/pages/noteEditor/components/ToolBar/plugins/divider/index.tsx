import * as React from 'react'
import { PluginComponent } from '../plugin'
import './index.less'

export default class Divider extends PluginComponent {
  static pluginName = 'divider'

  render() {
    return <span className="divider" />
  }
}
