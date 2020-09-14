import React from 'react';
import {
  Row,
  Col,
  Card,
  Button,
  Typography,
  Space,
  Steps
} from 'antd';
import './StudentRegisterPage.css';
import { BrowserRouter, Link, Route, Router } from 'react-router-dom';
import StudentAboutForm from '../../forms/student/StudentAboutForm';

const { Title, Text } = Typography;
const { Step } = Steps;

function StudentRegisterPage() {
  return (
    <Row type="flex" justify="center">
      <Col xs={0} sm={0} md={8} lg={7} xl={6}>
        <Space direction="vertical" size="large" >
          <Title level={3}>Регистрация студента</Title>
          <Steps direction="vertical" current={0} size="small">
            <Step title="Персональная информация" description="Заполните информацию о себе." />
            <Step title="Навыки" description="Расскажи о себе." />
            <Step title="Профиль" description="Данные для входа." />
          </Steps>
        </Space>
      </Col>
      <Col xs={24} sm={20} md={16} lg={15} xl={14}>
        <Card>
          <BrowserRouter>
            <Route path="/register/student/about">
              <StudentAboutForm />
            </Route>
          </BrowserRouter>
        </Card>
      </Col>
    </Row>
  )
}

export default StudentRegisterPage;