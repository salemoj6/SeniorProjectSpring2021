import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import Playerpos from './Playerpos';
import Leaderboard from './Leaderboard';
import { Layout, Menu, Breadcrumb, Dropdown, Row, Col, Divider, Card, PageHeader } from 'antd';

const { Header, Content, Footer } = Layout;

var userID = null;
function loggedin() {
  if (userID != null) {
    return (
      <Menu>
        <Menu.Item key="0"><a>Profile Page</a></Menu.Item>
        <Menu.Item key="0"><a>Friends</a></Menu.Item>
        <Menu.Item key="1"><a>Settings</a></Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">Logout</Menu.Item>
      </Menu>
    );
  }
  return (
    <Menu>
      <Menu.Item key="0"><a>Login</a></Menu.Item>
    </Menu>
  );
}
const menu = loggedin();

function App() {

  if (userID != null) {
    return (
      <div>
      <PageHeader title="Achievement Arena" />
      <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" style={{ alignContent: 'right' }}>
          <Menu.Item key="1">Leaderboards</Menu.Item>
          <Menu.Item key="2">
            <Dropdown overlay={menu} trigger={['click']}>
            <a onClick={e => e.preventDefault()}>Profile</a>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </Header>
      <Content mode="horizontal" style={{ padding: '0 50px', minHeight: '1000px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Achievement Arena</Breadcrumb.Item>
          <Breadcrumb.Item>Leaderboards</Breadcrumb.Item>
        </Breadcrumb>
      <Divider orientation="left">Leaderboards</Divider>
      <Row justify="space-around" align="left">
        <Col />
        <Col span={2}>
          <div style={{ itemAlign: 'left' }}>
            <Card title="Your Rank" bordered={false}>
            <Divider type="vertical" />Player Name<Divider type="horizontal" />Rank
            </Card>
          </div>
        </Col>
        <Col span={5}>
          <div><Leaderboard /></div>
        </Col>
        <Col />
      </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Achievement Arena ©2021</Footer>
    </Layout>
    </div>
    );
  }
  return (
    <div>
    <PageHeader title="Achievement Arena" />
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" style={{ alignContent: 'right' }}>
        <Menu.Item key="2">Leaderboards</Menu.Item>
        <Menu.Item key="3">
          <Dropdown overlay={menu} trigger={['click']}>
          <a onClick={e => e.preventDefault()}>Profile</a>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Header>
    <Content mode="horizontal" style={{ padding: '0 50px', minHeight: '1000px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Leaderboards</Breadcrumb.Item>
      </Breadcrumb>
    <Divider orientation="left">Leaderboards</Divider>
    <Row justify="space-around" align="center">
      <Col span={6}>
        <div><Leaderboard /></div>
      </Col>
    </Row>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Achievement Arena ©2021</Footer>
  </Layout>
  </div>
  );
}

export default App;
