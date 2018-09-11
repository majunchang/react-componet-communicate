import React from 'react'
import { Button } from 'antd'

export default class ExtendsComp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: props.data
    }
    console.log('React.Component方式创建的组件')
    console.log(this.props)
    this.changeColor = this.changeColor.bind(this)
  }

  render () {
    return (
      <div>
        <h1>我是新版创建组件的方法</h1>
        <Button > 11111点我回去</Button>
      </div>
    )
  }
}
