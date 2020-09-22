import React, { useState } from 'react';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  DatePicker,
  Radio,
  Upload,
  message,
  Typography
} from 'antd';
import UploadImage from '../../reusable/UploadImage';

const { Text, Link } = Typography;
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

function StudentLoginDataForm() {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      layout="vertical"
      onFinish={onFinish}
      scrollToFirstError
    >

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Пожалуйста, введите свой email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Повторите пароль"
        name="password-repeat"
        rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="agreement-rules" valuePropName="checked">
        <Checkbox>Я согласен с правилами использования данного сервиса</Checkbox>
      </Form.Item>

      <Form.Item name="agreement-personal-data" valuePropName="checked">
        <Checkbox>Я согласен с <Link underline href="https://ant.design" target="_blank" style={{color: 'black'}}>правилами</Link> обработки персональных данных</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Завершить
        </Button>
      </Form.Item>
    </Form>
  )
}

export default StudentLoginDataForm;