import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'

export default class Signup extends Component {
  render() {
    return (
      <Row type="flex" justify="center" align="middle" style={{ height: "100%" }}>
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
          <Col span={12}>
            <Row type="flex" justify="end" style={{ marginRight: "2.5px", marginTop: "5px" }}>
              <Button type="primary">Login</Button>
            </Row>
          </Col>
          <Col span={12}>
            <Row type="flex" justify="start" style={{ marginLeft: "2.5px", marginTop: "5px" }}>
              <Button type="danger">Signup</Button>
            </Row>
          </Col>
        </Row>
        </Col>
        <Col span={2}></Col>
      </Row>
    )
  }
}
