// 高阶组件 属性继承
import React from 'react'
import { Button } from 'antd'

class WrappedComponent extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.props.handleClick()
  }
  render () {
    return (
      <div>
        <h1>我是高阶组件的属性代理</h1>
        <Button onClick={this.handleClick} >按钮</Button>
      </div>
    )
  }
}

const HocProxy = WrappedComponent => {
  return class extends React.Component {
    handleClick () {
      console.log('点击了按钮')
    }
    render () {
      console.log(this.props)
      console.log(this)
      return (
        <WrappedComponent
          {...this.props}
          handleClick={this.handleClick}
        />
      )
    }
  }
}

export default HocProxy(WrappedComponent)
