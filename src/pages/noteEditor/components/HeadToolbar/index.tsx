import React from 'react'
import TextAndTitle from './TextAndTitle'
import FontSize from './FontSize'
import Bold from './Bold'
import Italic from './Italic'
import Underline from './Underline'
import './index.less'

const HeadToolBar: React.FC = () => {
  return (
    <div className="head-toolbar">
      <TextAndTitle />
      <FontSize />
      <Bold />
      <Italic />
      <Underline />
    </div>
  )
}

export default HeadToolBar
