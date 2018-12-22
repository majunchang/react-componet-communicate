import React from 'react'
import axios from 'axios'

export default class ExtendsComp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: props.data,
      testVar: 0,
      obj: {
        name: 1,
        age: 2
      }
    }
    this.changeColor = this.changeColor.bind(this)
  }
  componentDidMount () {
    this.changeColor() // 异步劫持
  }
  async changeColor () {
    const res = await this.num()
    console.log(this.state.testVar)
    console.log(res)
  }
  num () {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: '/article/getshe'
      }).then(res => {
        this.setState({
          testVar: 1
        })
        resolve(res)
      })
    })
  }
  render () {
    console.log('触发了 render')
    return (
      <div>
        <h1>React.extends创建组件的方式</h1>
      </div>
    )
  }
}
