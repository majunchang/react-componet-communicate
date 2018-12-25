import React from 'react'
import { Cascader } from 'antd'

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake'
    }]
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men'
    }]
  }]
}]

function onChange (value) {
  console.log(value)
}

function ChildComp (props) {
  return (
    <div>
      <Cascader options={options} onChange={onChange} placeholder='Please select' style={{ width: '500px' }} />
    </div>
  )
}

export default ChildComp
