import {
  Form, Row, Col, Input, Button, Icon
} from 'antd'
import React from 'react'
import HocForm from './HocProxy'

@HocForm
class AdvancedSearchForm extends React.Component {
  render () {
    let { getFields, handleReset, toggle, handleSearch, expand } = this.props
    return (
      <Form
        className='ant-advanced-search-form'
        onSubmit={handleSearch}
      >
        <Row gutter={24}>{this.props.getFields()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type='primary' htmlType='submit'>Search</Button>
            <Button style={{ marginLeft: 8 }} onClick={handleReset}>
              Clear
            </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={toggle}>
              Collapse <Icon type={expand ? 'up' : 'down'} />
            </a>
          </Col>
        </Row>
      </Form>
    )
  }
}
// let AdvancedSearchform = HocForm(AdvancedSearchForm)
export default Form.create({ name: 'advanced_search' })(AdvancedSearchForm)
