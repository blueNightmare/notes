import ToolBar from './ToolBar'
import Header from './plugins/header'
import Redo from './plugins/redo'
import Undo from './plugins/undo'
import Bold from './plugins/bold'
import Italic from './plugins/italic'
import Underline from './plugins/underline'
import StrikeThrough from './plugins/strikethrough'
import Divider from './plugins/divider'

ToolBar.use(Header)
ToolBar.use(Undo)
ToolBar.use(Redo)
ToolBar.use(Divider)
ToolBar.use(Bold)
ToolBar.use(Italic)
ToolBar.use(Underline)
ToolBar.use(StrikeThrough)

export const Plugins = {
  Header,
}

export default ToolBar
