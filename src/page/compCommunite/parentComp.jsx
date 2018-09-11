import React, { Component } from 'react'

import Child from './childOneComp'
import ChildTwoComp from './childTwoComp'
import PropTypes from 'prop-types';

class Parent extends Component {
  constructor () {
    super()
    this.state = {
      listArr: [ {
        text: '题目一'
      },
      {
        text: '题目二'
      } ]
    }
  }
  // 提供一个函数,用来返回相应的context对象
  getChildContext () {
    return {
      color: 'red'
    }
  }
  // 父组件声明自己支持context
  static childContextTypes = {
    color: PropTypes.string,
  }
  render () {
    let {listArr} = this.state
    return (
      <div>
        <Child name='Sara' />
        {
          listArr.map((item, index) => {
            return <ChildTwoComp value={item.text} key={index} />
          })
        }

      </div>
    )
  }
}

export default Parent
