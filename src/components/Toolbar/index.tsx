import * as React from 'react'
import './index.less'

interface ToolBarProps {
  style?: React.CSSProperties
  children: any
}

export default function ToolBar(props: ToolBarProps) {
  return (
    <div className='toolbar' style={props.style}>
      {props.children}
    </div>
  )
}