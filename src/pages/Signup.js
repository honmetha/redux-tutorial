import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'

export default class Signup extends Component {
  render() {
    return (
      <Row>
        <Col span={2}></Col>
        <Col span={10}>
          <img src="LoginPic.jpg" alt="Humans" width="100%" />
        </Col>
        <Col span={10}>
          Username:
          <Input placeholder="Username" />
          Password:
          <Input placeholder="Password" />
        <Row>
          <Col span={3}>
            <Button type="primary">Login</Button>
          </Col>
          <Col span={3}>
            <Button type="danger">Signup</Button>
          </Col>
        </Row>
        </Col>
        <Col span={2}></Col>
      </Row>
    )
  }
}
