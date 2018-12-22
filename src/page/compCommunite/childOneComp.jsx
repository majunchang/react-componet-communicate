import React from 'react'
import PropTypes from 'prop-types'
import emitter from '../../utils/event'
import { Button } from 'antd'

export default class Child extends React.Component {
  constructor (props) {
    super(props)
    this.changeColor = this.changeColor.bind(this)
  }
  changeColor () {
    emitter.emit('colorChange', 'deepskyblue')
  }
  render () {
    let { name } = this.props
    return (
      <div>
        <h1>Hello, {name}</h1>
        <h1>  子组件1</h1>
        <Button onClick={this.changeColor}> 点击 红色变成天蓝色</Button>
      </div>
    )
  }
}

Child.propTypes = {
  name: PropTypes.string.isRequired
}
