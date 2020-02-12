import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNumberToCounter, multiplyNumber } from '../redux/actions/actions'

class InputBox extends Component {
  state = {
    onNumber: 0,
    multiplyNumber: 0
  }

handleOnChange = (value, fieldName) => {
  this.setState({ [fieldName] : value });
}

  render() {
    return (
      <div>
        <input onChange={(e) => this.handleOnChange(e.target.value, "onNumber")} />
        <button onClick={() => this.props.addNumber(this.state.onNumber)}>Add</button>
        <br/>
        <input onChange={(e) => this.handleOnChange(e.target.value, "multiplyNumber")} />
        <button onClick={() => this.props.multiplyNum(this.state.multiplyNumber)}>Multiply</button>
        <button>Divine</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addNumber : addNumberToCounter,
  multiplynum : multiplyNumber
}

export default connect(null, mapDispatchToProps)(InputBox);