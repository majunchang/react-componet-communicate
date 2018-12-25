import React, { Component } from 'react'
import { Button } from 'antd'
import {
  Link
} from 'react-router-dom'

/*
1  <BrowserRouter> 使用 HTML5 提供的 history API (pushState, replaceState 和 popstate 事件) 来保持 UI 和 URL 的同步。
2  <HashRouter> 使用 URL 的 hash 部分（即 window.location.hash）来保持 UI 和 URL 的同步。(兼容老版本的浏览器)
3  Link  <Link to="/about">About</Link>  为你的应用提供声明式的可访问的导航链接
4  <Route> 可能是 React Router 中最重要的组件，它可以帮助你理解和学习如何更好的使用 React Router。它最基本的职责是在其 path 属性与某个 location 匹配时呈现一些 UI。
5  所有 Router 组件的通用低阶接口。  提供上下文  监听histpry  自身封装成一个容器组件
6  switch  用于渲染与路径匹配的第一个子 <Route> 或 <Redirect>。
*/

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
