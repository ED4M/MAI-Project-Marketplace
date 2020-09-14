import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import './Header.css';


function Header() {
  return (
      <Layout className="header">
        <Row>
          <Col className="icon" span={8}>
            
          </Col>
          <Col className="auth" span={8} offset={8}>
            <Button className="auth_button" type="primary" size="small">Войти</Button>
            <Button className="auth_button" size="small">Регистрация</Button>
          </Col>
        </Row>
      </Layout>
  )
}

export default Header;