//  高阶组件  反向继承
import React, { Component } from 'react'
import simpleHoc from './simple-hoc'

class Usual extends Component {
  constructor () {
    super()
    this.state = {
      name: '123'
    }
  }
  componentDidMount () {
    console.log(this.state)
  }

  render () {
    console.log(this.props, 'props')
    return (
      <div>
        Usual
      </div>
    )
  }
}
export default simpleHoc(Usual)
