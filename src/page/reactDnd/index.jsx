import { Table } from 'antd';
import { DragDropContext, DragSource, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import React from 'react'
import ReactDOM from 'react-dom'

function dragDirection(
  dragIndex,
  hoverIndex,
  initialClientOffset,
  clientOffset,
  sourceClientOffset,
) {
    console.log('initialClientOffset');
    console.log(initialClientOffset);
    console.log('clientOffset');
    console.log(clientOffset);
    console.log('sourceClientOffset');
    console.log(sourceClientOffset);
  const hoverMiddleY = (initialClientOffset.y - sourceClientOffset.y) / 2;
  const hoverClientY = clientOffset.y - sourceClientOffset.y;
  console.log(hoverMiddleY);
  console.log(hoverClientY);
  if (dragIndex < hoverIndex && hoverClientY > hoverMiddleY) {
    return 'downward';
  }
  if (dragIndex > hoverIndex && hoverClientY < hoverMiddleY) {
    return 'upward';
  }
}

class BodyRow extends React.Component {
  
  componentDidMount() {
    console.log('this is BodyRow');
    console.log(this.props);
  }
  
  render() {
    const {
      isOver,
      connectDragSource,
      connectDropTarget,
      moveRow,
      dragRow,
      clientOffset,
      sourceClientOffset,
      initialClientOffset,
      ...restProps
    } = this.props;
   
    const style = { ...restProps.style, cursor: 'move' };
    
    let className = restProps.className;
    if (isOver && initialClientOffset) {
      const direction = dragDirection(
        dragRow.index,
        restProps.index,
        initialClientOffset,
        clientOffset,
        sourceClientOffset
      );
      if (direction === 'downward') {
        className += ' drop-over-downward';
      }
      if (direction === 'upward') {
        className += ' drop-over-upward';
      }
    }

    return connectDragSource(
      connectDropTarget(
        <tr
          {...restProps}
          className={className}
          style={style}
        />
      )
    );
  }
}

const rowSource = {
  beginDrag(props) {
    return {
      index: props.index,
    };
  },
};

const rowTarget = {
  // 响应 drop 事件 
  drop(props, monitor) {
    // console.log(props);
    // console.log(monitor);
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    // console.log('=====drop=====');
    // console.log(dragIndex);
    // console.log(hoverIndex);
    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Time to actually perform the action
    props.moveRow(dragIndex, hoverIndex);
    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  },
};

/*
 1. DragSource 可以拖拽的组件
 2. DropTarget 可以接受拖拽的组件
 DragSource（type,spec,collect）

*/
const DragableBodyRow = DropTarget('row', rowTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(), // 返回以将 drop target 和 React DnD backend 连接起来的方法。
  isOver: monitor.isOver(), // source 是否在 target 的上方
  sourceClientOffset: monitor.getSourceClientOffset(), //  目标组件 （dom 的 client） client 距离
}))(
  DragSource('row', rowSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),  // 返回 source DOM 和 React DnD backend 连接起来的方法
    dragRow: monitor.getItem(),
    clientOffset: monitor.getClientOffset(), // 
    initialClientOffset: monitor.getInitialClientOffset(), // 拖拽组件初始拖拽时的 offset 鼠标到可视区域上边框（左边框）的距离
  }))(BodyRow)
);

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};


class DragSortingTable extends React.Component {
  state = {
    data: [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }],
  }
  
  componentDidMount() {
    console.log(this.props);
  }
  
  components = {
    body: {
      row: DragableBodyRow,
    },
  }

  moveRow = (dragIndex, hoverIndex) => {
    const { data } = this.state;
    const dragRow = data[dragIndex];
    console.log(dragIndex);
    console.log(hoverIndex);
    console.log(data);
    this.setState(
      update(this.state, {
        data: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragRow]],
        },
      }),
    );
  }
 
  render() {
    return (
      <Table
        columns={columns}
        rowSelection={rowSelection}
        dataSource={this.state.data}
        components={this.components}
        onRow={(record, index) => ({
          index,
          moveRow: this.moveRow,
        })}
      />
    );
  }
}

// 应用的根组件
const Demo = DragDropContext(HTML5Backend)(DragSortingTable);

export default Demo

