import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { connect } from 'react';
import CounterDisplay from './components/ButtonDown';
import ButtonUp from './components/ButtonUp';
import ButtonDown from './components/ButtonDown';
import ButtonVisibility from './components/ButtonVisibility';
import InputBox from './components/InputBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.isShow == true ? (
          <>
            <CounterDisplay />
            <ButtonUp />
            <ButtonDown />
          </>
        ) : null}
        <br />
        <ButtonVisibility />
        <br />
        <InputBox />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isShow: state.visible
  };
};

export default connect(mapStateToProps, null)(App);