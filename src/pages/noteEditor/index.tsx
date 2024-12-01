import React, { useEffect, useRef } from 'react'
import { Editor } from '@/editorCore'
import HeadToolbar from './components/HeadToolbar'
import OtherButton from './components/OtherButton'
import './index.less'

const NoteEditor = () => {
  const editorRef = useRef<Editor | null>(null)
  const editorContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (editorContainerRef.current) {
      editorRef.current = new Editor({ element: editorContainerRef.current })
    }
  }, [editorContainerRef.current])

  return (
    <div className="note">
      <div className="note-toolbar-wrapper">
        <div className="doc-header"></div>
        <div className="toolbar">
          <OtherButton />
          <HeadToolbar />
        </div>
      </div>
      <div className="note-editor-wrapper" ref={editorContainerRef}></div>
    </div>
  )
}

export default NoteEditor
