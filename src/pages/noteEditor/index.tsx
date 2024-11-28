import React, { useEffect, useRef } from 'react'
import { Editor } from '@/editorCore'
import './index.less'

const NoteEditor = () => {
  const editorRef = useRef<Editor | null>(null)
  const editorContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (editorContainerRef.current) {
      editorRef.current = new Editor({ element: editorContainerRef.current })
    }
  }, [editorContainerRef.current])

  return <div className="editor-container" ref={editorContainerRef}></div>
}

export default NoteEditor
