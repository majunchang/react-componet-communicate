import React, { Component } from 'react'
import PropTypes from 'prop-types'
import emitter from '../../utils/event'

class ChildTwoComp extends Component {
  // 子组件声明自己要使用context
  static contextTypes = {
    color: PropTypes.string
  }
  static propTypes = {
    value: PropTypes.string
  }
  constructor () {
    super()
    this.state = {
      color: 'pink'
    }
  }
  componentDidMount () {
    this.eventEmitter = emitter.addListener('colorChange', color => {
      this.setState(
        {
          color
        },
        () => {
          console.log(color)
        }
      )
    })
  }
  componentWillUnmount () {
    if (typeof this.eventEmitter === 'function') {
      this.eventEmitter.removeListener(this.eventEmitter)
    }
  }
  render () {
    const { value } = this.props
    return (
      <div>
        <h1 style={{ background: this.state.color }}>子组件2</h1>
        <li style={{ background: this.state.color }}>
          <span>{value}</span>
        </li>
      </div>
    )
  }
}

export default ChildTwoComp
