import * as React from 'react'
import { Editor } from '@/editorCore'

export interface PluginProps {
  getEditor: () => Editor
  config: any
}

export abstract class PluginComponent<
  S = {},
  P extends PluginProps = PluginProps
> extends React.Component<P, S> {
  static pluginName: string = ''

  static align: string = 'left'

  static defaultConfig = {}

  protected get editor(): Editor {
    return this.props.getEditor()
  }

  protected getConfig(key: string, defaultConfig?: any) {
    return typeof this.props.config[key] !== 'undefined' && this.props.config[key] !== null
      ? this.props.config[key]
      : defaultConfig
  }
}
