import React, { Component } from 'react'
import { Button } from 'antd'
import {
  Link
} from 'react-router-dom'

class HomeIndex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text:
        '教师节快乐，感谢生命中出现过的老师，让似水年华没有苍白，教会我们听说读写思',
      flag: false
    }
  }
  render () {
    return (
      <div>
        <h1> 组件 list </h1>
        <ul>
          <li>
            <Button type='primary'>
              <Link to='/build/nostatus'> 无状态组件 </Link>
            </Button>
          </li>
          <li>
            <Button>
              <Link to='/build/extends'> extends创建组件 </Link>
            </Button>
          </li>
          <li>
            <Button type='dashed'>
              <Link to='/compCommunicate'> 组件传值(父子和兄弟) </Link>
            </Button>
          </li>
          <li>
            <Button type='primary'>
              <Link to='/HocProxy'> 高阶组件-属性代理 </Link>
            </Button>
          </li>
          <li>
            <Button type='primary'>
              <Link to='/reverseInhertit'> 高阶组件-反向继承 </Link>
            </Button>
          </li>
        </ul>
      </div>
    )
  }
}

export default HomeIndex
