import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  HashHistory
} from 'react-router-dom'
import {
  Layout, Menu, Breadcrumb, Icon
} from 'antd'
import routes from './router'



/*
1  <BrowserRouter> 使用 HTML5 提供的 history API (pushState, replaceState 和 popstate 事件) 来保持 UI 和 URL 的同步。
2  <HashRouter> 使用 URL 的 hash 部分（即 window.location.hash）来保持 UI 和 URL 的同步。(兼容老版本的浏览器)
3  Link  <Link to="/about">About</Link>  为你的应用提供声明式的可访问的导航链接
4  <Route> 可能是 React Router 中最重要的组件，它可以帮助你理解和学习如何更好的使用 React Router。它最基本的职责是在其 path 属性与某个 location 匹配时呈现一些 UI。
5  所有 Router 组件的通用低阶接口。  提供上下文  监听histpry  自身封装成一个容器组件
6  switch  用于渲染与路径匹配的第一个子 <Route> 或 <Redirect>。

*/




const {
  Header, Content, Footer, Sider
} = Layout
const SubMenu = Menu.SubMenu

let menuArr = [
  {
    path:'/',
    submenu:false,
    text:'主页',
    icon:''
  },
  {
    path:'/build/nostatus',
    submenu:false,
    text:'函数式无状态组件',
    icon:''
  },
  {
    path:'/build/extends',
    submenu:false,
    text:'extends方式创建组件',
    icon:''
  },
  {
    path:'/build/extendsCompTable',
    submenu:false,
    text:'extends方式创建 表格组件',
    icon:''
  },
  {
    path:'/compCommunicate',
    submenu:false,
    text:'组件传值（父子和兄弟）',
    icon:''
  },
  {
    path:'/HocProxy',
    submenu:false,
    text:'高阶组件-属性代理',
    icon:''
  },
  {
    path:'/reverseInhertit',
    submenu:false,
    text:'高阶组件-反向继承',
    icon:''
  },
]
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  renderMenu(){
    return (
      <Menu theme='dark' defaultSelectedKeys={['0']} mode='inline'>
      {
        menuArr.map((item,index)=>{
          return  <Menu.Item key={index}>
          <Icon type={item.icon||'pie-chart'} />
          <Link to={item.path} className='App-link'> {item.text} </Link>
        </Menu.Item>
        })
      }
      </Menu>
    )
  }
  renderRouter(){
    return (
      <Switch>
      {routes.map((item, i) => <Route exact path={item.path} component={item.component} />)}
      </Switch>
    )
  }
  render () {
    console.log(routes);
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
                <div className='logo' >
                念念不忘
                </div>
                {this.renderMenu()}
              </Sider>
              <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>面包屑</Breadcrumb.Item>
                    <Breadcrumb.Item>小面包</Breadcrumb.Item>
                  </Breadcrumb>
                  <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    {this.renderRouter()}
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
