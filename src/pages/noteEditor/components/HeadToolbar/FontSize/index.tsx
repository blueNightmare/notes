import React from 'react'
import { Select } from 'antd'
import './index.less'

const FontSize: React.FC = () => {
  const handleChange = React.useCallback(() => {}, [])

  return (
    <Select
      className="font-size"
      defaultValue="16px"
      style={{ width: 72 }}
      onChange={handleChange}
      options={[
        { value: '12px', label: '12px' },
        { value: '16px', label: '16px' },
        { value: '22px', label: '22px' },
        { value: '24px', label: '24px' },
        { value: '28px', label: '28px' },
        { value: '32px', label: '32px' },
      ]}
    />
  )
}

export default FontSize
