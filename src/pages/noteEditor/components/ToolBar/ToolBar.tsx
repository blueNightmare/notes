import * as React from 'react'
import { v4 as uuid } from 'uuid'
import DividerPlugin from './plugins/divider'
import NavigationBar from '@/components/NavigationBar'
import { Editor } from '@/editorCore'

type Plugin = {
  comp: any
  config: any
}

interface ToolBarProps {
  plugins?: string[]
  getEditor: () => Editor | null
}

interface ToolBarState {
  plugins: { [x: string]: React.ReactElement[] }
}

class ToolBar extends React.Component<ToolBarProps, ToolBarState> {
  private static plugins: Plugin[] = []

  static use(comp: any, config: any = {}) {
    for (let i = 0; i < ToolBar.plugins.length; i++) {
      if (ToolBar.plugins[i].comp === comp) {
        ToolBar.plugins.splice(i, 1, { comp, config })
        return
      }
    }
    ToolBar.plugins.push({ comp, config })
  }

  static unUse(comp: any) {
    for (let i = 0; i < ToolBar.plugins.length; i++) {
      if (ToolBar.plugins[i].comp === comp) {
        ToolBar.plugins.splice(i, 1)
        return
      }
    }
  }

  static unUseAll() {
    ToolBar.plugins = []
  }

  constructor(props: any) {
    super(props)
    this.state = {
      plugins: this.getPlugins(),
    }
  }

  getPlugins() {
    let plugins: Plugin[] = []
    if (this.props.plugins) {
      const addToPlugins = (name: string) => {
        if (name === DividerPlugin.pluginName) {
          plugins.push({
            comp: DividerPlugin,
            config: {},
          })
          return
        }
        for (const it of ToolBar.plugins) {
          if (it.comp.pluginName === name) {
            plugins.push(it)
            return
          }
        }
      }

      for (const name of this.props.plugins) {
        addToPlugins(name)
      }
    } else {
      plugins = [...ToolBar.plugins]
    }
    const result: { [x: string]: React.ReactElement[] } = {}

    plugins.forEach(it => {
      if (typeof result[it.comp.align] === 'undefined') {
        result[it.comp.align] = []
      }

      const key = it.comp.pluginName === 'divider' ? uuid() : it.comp.pluginName
      result[it.comp.align].push(
        React.createElement(it.comp, {
          getEditor: this.props.getEditor.bind(this),
          config: {
            ...(it.comp.defaultConfig || {}),
            ...(it.config || {}),
          },
          key,
        })
      )
    })
    return result
  }

  render() {
    const getPluginAt = (at: string) => this.state.plugins[at] || []
    return <NavigationBar visible={true} left={getPluginAt('left')} right={getPluginAt('right')} />
  }
}

export default ToolBar
