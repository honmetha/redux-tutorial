import React, { Component } from 'react'
import { connect } from 'react-redux'
import { subtractCounter } from '../redux/actions/actions'

class ButtonDown extends Component {
  render() {
    return (
      <button onClick={this.props.subtractCounter}>Substract</button>
    )
  }
}

const mapDispatchToProps = {
  HandleMinus: subtractCounter
}

export default connect(null, mapDispatchToProps)(ButtonDown)