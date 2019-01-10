import { Table, Divider, Tag, Button, message } from 'antd'
import React from 'react'

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href='javascript:;'>{text}</a>
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age'
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address'
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => <Tag color='blue' key={tag}>{tag}</Tag>)}
    </span>
  )
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href='javascript:;'>Invite {record.name}</a>
      <Divider type='vertical' />
      <a href='javascript:;'>Delete</a>
    </span>
  )
}]

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer']
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser']
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher']
}]

export default class ExtendsCompTable extends React.Component {
  constructor (props) {
    super(props)
    this.state  = {
      name: 'react测试this指向'
    }
    this.handler = this.handler.bind(this)
  }

  handler () {
    message.info('点击了 bindthis),通过 bind 绑定 this')
  }
  renderDom () {
    let { name } = this.state
    return <Button>{name}</Button>
  }
  handlerArrow=()=> {
    console.log(this);
    message.info('点击了箭头函数绑定按钮,通过箭头函数绑定 this')
  }
  handleInnerArrow(){
    console.log(this);
    message.info('点击了箭头函数绑定,通过 bind 绑定 this')
  }
  handleBind(){
    console.log(this);
    message.info('点击了bind')
  }
  render () {
    return (
      <div>
        <h1>234567890</h1>
        <Button type='primary' onClick={this.handler}>bind（this）</Button>
        {/* 这种直接调用的方式不需要绑定 this */}
        {this.renderDom()}  
        {/* 这种  handlerArrow=()=> {...}的形式  虽然可以用 但是不太建议*/}
        <Button type='primary' onClick={this.handlerArrow}>箭头函数绑定</Button>
        <Button type='primary' onClick={() => {
          this.handleInnerArrow()
        }}>点击触发方法</Button>
        <Button type='primary' onClick={this.handleBind.bind(this)}>bind</Button>
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
}
