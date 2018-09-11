import React from 'react'
import {Button} from 'antd'

function ChildComp (props) {
  console.log('这是无状态组件的子组件')
  console.log(props)

  return (
    <div>
      <h1>这是无状态组件的子组件</h1>
      <Button >这是无状态组件的子组件</Button>
    </div>
  )
}

export default ChildComp
