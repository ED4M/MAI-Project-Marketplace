import React from 'react';
import {
  Row,
  Col,
  Card,
  Button,
  Typography,
  Space
} from 'antd';
import './RegistrationTypePage.css';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

function RegistrationTypePage() {
  return (
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={22} lg={20} xl={18}>
        <Card>
          <Row gutter={[48, 16]} type="flex" justify="center">
            <Col className="student-block" xs={24} sm={24} md={12} lg={10} xl={10}>
              <Space direction="vertical">
                <Title level={3}>Студент</Title>
                <Text type="secondary">Хочешь присоединиться к выполнению проектов? Получить опыт разработки?</Text>
                <Link to="/register/student/about"><Button type="primary">Зарегистрировать как Студент</Button></Link>
                <Text type="secondary">Регистрация займет <Text type="secondary" strong>~ 3 минуты</Text></Text>
              </Space>
            </Col>
            <Col className="company-block" xs={24} sm={24} md={12} lg={10} xl={10}>
              <Space direction="vertical">
                <Title level={3}>Компания</Title>
                <Text type="secondary">Есть проекты, а времени на разработку нет? Передайте их выполнение нам!</Text>
                {/* <Button type="primary">Зарегистрировать как Компания</Button> */}
                <Link to="/register/company/about"><Button type="primary">Зарегистрировать как Компания</Button></Link>
                <Text type="secondary">Регистрация займет <Text type="secondary" strong>~ 4 минуты</Text></Text>
              </Space>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default RegistrationTypePage;