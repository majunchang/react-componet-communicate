import React from 'react'
//  引入一个子组件
import ChildComp from '../../component/childComp'

function NoStatusComp (props) {
  console.log('无状态组件 没有this  通过声明函数的方式 来构建方法')
  console.log(props)
  return (
    <div>
      <h1>我是无状态组件</h1>
      <ChildComp />
    </div>
  )
}

export default NoStatusComp
