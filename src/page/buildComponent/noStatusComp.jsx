import React from 'react'
import {Button} from 'antd'
//  引入一个子组件
import ChildComp from '../../component/childComp'

function NoStatusComp (props) {
  console.log(props)
  let goPropsBack = function () {
    console.log('无状态组件 没有this  通过声明函数的方式 来构建方法')
  }
  return (
    <div>
      <h1>我是无状态组件</h1>
      <ChildComp />
      <Button onClick={goPropsBack}>点我回去</Button>
    </div>
  )
}

export default NoStatusComp
