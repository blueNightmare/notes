import React, { useEffect, useRef } from 'react'
import { Editor } from '@/editorCore'
import ToolBar from './components/ToolBar'
import './index.less'

const NoteEditor = () => {
  const editorRef = useRef<Editor | null>(null)
  const editorContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (editorContainerRef.current) {
      editorRef.current = new Editor({ element: editorContainerRef.current })
    }
  }, [editorContainerRef.current])

  const getEditor = React.useCallback(() => {
    return editorRef.current
  }, [editorRef.current])

  return (
    <div className="note">
      <div className="note-toolbar-wrapper">
        <ToolBar getEditor={getEditor} />
      </div>
      <div className="note-editor-wrapper" ref={editorContainerRef}></div>
    </div>
  )
}

export default NoteEditor
