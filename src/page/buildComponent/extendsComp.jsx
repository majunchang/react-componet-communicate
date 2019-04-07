import React from 'react'
import axios from 'axios'
import { Button } from 'antd'

export default class ExtendsComp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: props.data,
      testVar: 0,
      name: 'xiaoming',
      obj: {
        name: 1,
        age: 2
      },
      accumulationValue: 0
    }
    this.changeColor = this.changeColor.bind(this)
  }
  componentDidMount () {
    this.setState((prevState, props) => ({
      name: 'xiaohong',
      accumulationValue: prevState.accumulationValue + 1
    }))
    this.setState((prevState, props) => ({
      accumulationValue: this.state.accumulationValue + 1
    }), () => {
      console.log(this.state.accumulationValue)
    })
    console.log(this.state.name) // 小明

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
  handclick = () => {
    setTimeout(() => {
      this.setState({
        name: 'tangyang唐洋'
      })
      console.log(this.state.name) // tangyang唐洋
    }, 1)
  }
  showResult=() => {
    setTimeout(() => {
      this.setState((prevState, props) => ({
        accumulationValue: ++prevState.accumulationValue
      }))
      console.log('12345')
      console.log(this.state.accumulationValue)
    })
  }
  render () {
    console.log('触发了 render')
    let { name } = this.state
    return (
      <div>
        <h1>React.extends创建组件的方式</h1>
        <h2>{name}</h2>
        <Button onClick={this.handclick}>react 渲染机制(批量更新机制)</Button>
        <Button onClick={this.changeColor} type='primary'>async实现异步劫持</Button>
        <Button type='primary'>学习 props.children</Button>
        <Button type='primary' onClick={this.showResult}>react 批量更新 监听state</Button>
        <RenderPropsChildren>
          <span>春风得意马蹄疾</span>
          <span>一日看尽长安花</span>
        </RenderPropsChildren>
      </div>
    )
  }
}

function RenderPropsChildren (props) {
  console.log(props)
  return (
    <div>
      {props.children.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </div>
  )
}
