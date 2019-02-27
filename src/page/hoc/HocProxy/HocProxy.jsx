import React from 'react'
import {
  Form, Row, Col, Input, Button, Icon
} from 'antd'

const FormCreate = (WrappedComponent) => {
  return class comp extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        expand: false
      }
    }
    getFields = () => {
      console.log(this.state)
      console.log(this.props)
      const count = this.state.expand ? 10 : 6
      const { getFieldDecorator } = this.props.form
      const children = []
      for (let i = 0; i < 10; i++) {
        children.push(
          <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <Form.Item label={`Field ${i}`}>
              {getFieldDecorator(`field-${i}`, {
                rules: [{
                  required: true,
                  message: 'Input something!'
                }]
              })(
                <Input placeholder='placeholder' />
              )}
            </Form.Item>
          </Col>
        )
      }
      return children
    }

    handleSearch = (e) => {
      e.preventDefault()
      this.props.form.validateFields((err, values) => {
        console.log(err)
        console.log('Received values of form: ', values)
      })
    }

    handleReset = () => {
      this.props.form.resetFields()
    }

    toggle = () => {
      const { expand } = this.state
      this.setState({ expand: !expand })
    }
    render () {
      const props = {
        getFields: this.getFields,
        handleSearch: this.handleSearch,
        handleReset: this.handleReset,
        toggle: this.toggle
      }
      return (
        <WrappedComponent {...props} />
      )
    }
  }
}

export default FormCreate
