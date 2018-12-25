import React from 'react'
//  引入一个子组件
import ChildComp from '../../component/childComp'
import { AutoComplete } from 'antd'

let dataSource
let handleSearch = (value) => {
  dataSource = !value ? [] : [
    value,
    value + value,
    value + value + value
  ]
}
handleSearch('你好，全世界!  ')
function onSelect (value) {
  console.log('onSelect', value)
}
let marginTop = { marginTop: '10px' }

function NoStatusComp (props) {
  console.log('无状态组件 没有this  通过声明函数的方式 来构建方法')
  console.log(props)
  return (
    <div>
      <h5> 无状态组件 </h5>
      <AutoComplete
        dataSource={dataSource}
        style={{ width: 500 }}
        onSelect={onSelect}
        onSearch={handleSearch}
        placeholder='请输入相关内容'
      />
      <h5 style={marginTop}> 无状态child字组件</h5>
      <ChildComp />
    </div>
  )
}

export default NoStatusComp
