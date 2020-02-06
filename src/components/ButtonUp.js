import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCounter } from '../redux/actions/actions'

class ButtonUp extends Component {
  render() {
    return (
      <button onClick={this.props.HandleAdd}>Plus</button>
    )
  }
}

const mapDispatchToProps = {
  HandleAdd: addCounter
}

export default connect(null, mapDispatchToProps)(ButtonUp)