// import React from 'react'
// import {Button} from 'antd'

// let createClassComp = React.createClass({
//   getInitialState () {
//     return {
//       text: 'React早期创建组件的方式',
//       title: '教师节快乐，感谢生命中出现过的老师，让似水年华没有苍白，教会我们听说读写思',
//       num: 0
//     }
//   },
//   componentDidMount () {
//     console.log('cmd')
//     console.log(this.props)
//   },
//   componentWillReceiveProps (nextProps) {
//     console.log('cwr')
//     console.log(this.props)
//     console.log('下一次')
//     console.log(nextProps)
//   },
//   add () {
//     this.num++
//   },
//   render () {
//     let {title, text} = this.state
//     return (
//       <div>
//         <h1>{title}</h1>
//         <span>{text}</span>
//         <Button onClick={this.add}> 触发方法 </Button>
//       </div>
//     )
//   }
// })

// export default createClassComp
