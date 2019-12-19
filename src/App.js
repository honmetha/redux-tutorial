import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Redirect to="/" />
        </Switch>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
