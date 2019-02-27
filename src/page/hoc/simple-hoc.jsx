import React, { Component } from 'react'

const simpleHoc = WrappedComponent => {
  console.log('simpleHoc')
  return class name extends WrappedComponent {
    componentDidMount () {
      // console.log(this.state)
      // console.log(this.props)
    }

    render () {
      // console.log(this.state)
      return super.render()
    }
  }
}
export default simpleHoc
