import React from 'react'
import { Select } from 'antd'
import './index.less'

const TextAndTitle: React.FC = () => {
  const handleChange = React.useCallback(() => {}, [])

  return (
    <Select
      className="text-and-title"
      defaultValue="正文"
      style={{ width: 72 }}
      onChange={handleChange}
      options={[
        { value: 'title-one', label: '标题1' },
        { value: 'title-two', label: '标题2' },
        { value: 'title-three', label: '标题3' },
        { value: 'title-four', label: '标题4' },
        { value: 'title-five', label: '标题5' },
        { value: 'title-six', label: '标题6' },
      ]}
    />
  )
}

export default TextAndTitle
