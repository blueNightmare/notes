import * as React from 'react'
import DropList from '@/components/DropList'
import Icon from '@/components/Icon'
import { PluginComponent } from '../plugin'
import HeaderList from './HeaderList'

interface State {
  show: boolean
}

export default class Header extends PluginComponent<State> {
  static pluginName = 'header'

  static align = 'right'

  constructor(props: any) {
    super(props)

    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
    this.handleSelectHeader = this.handleSelectHeader.bind(this)

    this.state = {
      show: false,
    }
  }

  private show() {
    this.setState({
      show: true,
    })
  }

  private hide() {
    this.setState({
      show: false,
    })
  }

  private handleSelectHeader(header: string) {
    this.editor.commands.insertHeading(header)
  }

  render() {
    return (
      <span className="button button-type-header" onMouseEnter={this.show} onMouseLeave={this.hide}>
        <Icon type="font-size" />
        <DropList show={this.state.show} onClose={this.hide}>
          <HeaderList onSelectHeader={this.handleSelectHeader} />
        </DropList>
      </span>
    )
  }
}
