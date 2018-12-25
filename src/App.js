import React, { Component } from 'react'
import './App.css'
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  HashHistory
} from 'react-router-dom'
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';

// 首页
import HomeIndex from './page/index'
//  创建react的三种方式
import NoStatusComp from './page/buildComponent/noStatusComp'
import ExtendsComp from './page/buildComponent/extendsComp'
import Parent from './page/compCommunite/parentComp'

//  高阶组件
import HocProxy from './page/hoc/HocProxy'

/*
1  <BrowserRouter> 使用 HTML5 提供的 history API (pushState, replaceState 和 popstate 事件) 来保持 UI 和 URL 的同步。
2  <HashRouter> 使用 URL 的 hash 部分（即 window.location.hash）来保持 UI 和 URL 的同步。(兼容老版本的浏览器)
3  Link  <Link to="/about">About</Link>  为你的应用提供声明式的可访问的导航链接
4  <Route> 可能是 React Router 中最重要的组件，它可以帮助你理解和学习如何更好的使用 React Router。它最基本的职责是在其 path 属性与某个 location 匹配时呈现一些 UI。
5  所有 Router 组件的通用低阶接口。  提供上下文  监听histpry  自身封装成一个容器组件
6  switch  用于渲染与路径匹配的第一个子 <Route> 或 <Redirect>。

*/
const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  handleClick(){
    console.log(this.state);
    console.log(this.props)
  }
  render () {
    return (
      <div>
         <Router>
           <div>
         <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          width={212}
        >
          <div className="logo" >
                念念不忘
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span onClick={this.handleClick}>函数式无状态组件</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>extends方式创建组件</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="desktop" />
              <span>高阶组件-属性代理</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="desktop" />
              <span>高阶组件-反向继承</span>
            </Menu.Item>
            {/* <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu> */}
            <Menu.Item key="5">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>面包屑</Breadcrumb.Item>
              <Breadcrumb.Item>小面包</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
       
          <Switch>
            <Route path='/' component={HomeIndex} exact />
            <Route path='/build/nostatus' component={NoStatusComp} />
            <Route path='/build/extends' component={ExtendsComp} />
            <Route path='/compCommunicate' component={Parent} />
            {/* 高阶组件 属性代理 */}
            <Route path='/HocProxy' component={HocProxy} />
            {/* 高阶组件  反向继承 */}
            <Route path='/reverseInhertit' component={Parent} />
          </Switch>
       
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            react-guide  build by majunchang
          </Footer>
        </Layout>
      </Layout>
      </div>
      </Router>
      </div>
    )
  }
}

export default App
