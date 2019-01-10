import React from 'react'
import Loadable from 'react-loadable'
const Loading = (props) => {
  return <div>Loading...</div>
}

export default loader => Loadable({
  loader,
  loading: Loading,
  delay: 200 //  当组件加载 花费的时间 多余200ms  才会限制 loading 组件  默认200
  // preloading: (预加载)
})

/*
const foo = Loadable({
  loader:foo,
  loading: Loading,
})

foo.preload()

*/
