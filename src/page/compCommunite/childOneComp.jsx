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
    console.log('emit了方法')
  }
  render () {
    let {name} = this.props
    return (
      <div>
        <h1>Hello, {name}</h1>
        <Button onClick={this.changeColor}> 11111点我回去</Button>
      </div>
    )
  }
}

Child.propTypes = {
  name: PropTypes.string.isRequired
}
