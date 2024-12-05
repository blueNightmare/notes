import * as React from 'react'
import './HeaderList.less'

interface HeaderListProps {
  onSelectHeader?: (header: string) => void
}

class HeaderList extends React.Component<HeaderListProps, any> {
  handleHeader(header: string) {
    const { onSelectHeader } = this.props
    if (typeof onSelectHeader === 'function') {
      onSelectHeader(header)
    }
  }

  render() {
    return (
      <ul className="header-list">
        <li className="list-item">
          <h1 onClick={this.handleHeader.bind(this, '1')}>H1</h1>
        </li>
        <li className="list-item">
          <h1 onClick={this.handleHeader.bind(this, '2')}>H2</h1>
        </li>
        <li className="list-item">
          <h1 onClick={this.handleHeader.bind(this, '3')}>H3</h1>
        </li>
        <li className="list-item">
          <h1 onClick={this.handleHeader.bind(this, '4')}>H4</h1>
        </li>
        <li className="list-item">
          <h1 onClick={this.handleHeader.bind(this, '5')}>H5</h1>
        </li>
        <li className="list-item">
          <h1 onClick={this.handleHeader.bind(this, '6')}>H6</h1>
        </li>
      </ul>
    )
  }
}

export default HeaderList
