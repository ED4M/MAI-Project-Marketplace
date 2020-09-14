import React from 'react';
import { Row, Layout, Card, Col, Button, Input, Space, Form, Typography, } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './LogInForm.css';
import { Link } from 'react-router-dom';

// const { Header, Content, Footer } = Layout;
const { Text } = Typography;


function LogInForm() {
  return (
    <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col xs={24} sm={20} md={12} lg={10} xl={6}>
        <Card className="login-card">
          <Space className="login-space-block" direction="vertical" size="middle">
            <Button block>Войти через МАИ</Button>
            <Button block>Войти через Github</Button>
            <Button block>Войти через ВК</Button>
            <Text type="secondary">или</Text>
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                name="username"
                placeholder="Basic usage"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input placeholder="Логин" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password placeholder="Пароль" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Вход
            </Button>
              </Form.Item>
            </Form>
            <Link to="/register-type"><Button block>Регистрация</Button></Link>
          </Space>
        </Card>
      </Col>
    </Row>
  )
}

export default LogInForm;