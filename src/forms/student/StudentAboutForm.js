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
  message
} from 'antd';
import UploadImage from '../../reusable/UploadImage';

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

function StudentAboutForm() {
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
        name="firstname"
        label="Имя"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите своё имя!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastname"
        label="Фамилия"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите свою фамилию имя!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="middlename"
        label="Отчество"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите своё отчество!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="birth-date"
        label="Дата рождения"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите дату рождения!',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Пол"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, выберите пол!',
          },
        ]}
      >
        <Radio.Group defaultValue="a">
          <Radio.Button value="m"><span role="img" aria-label="man-emoji">👨</span> Мужской</Radio.Button>
          <Radio.Button value="w"><span role="img" aria-label="woman-emoji">👩</span> Женский</Radio.Button>
          <Radio.Button value="t"><span role="img" aria-label="transgender-emoji">⚧</span> Трансгендер</Radio.Button>
          <Radio.Button value="r"><span role="img" aria-label="robot-emoji">🤖</span> Робот</Radio.Button>
          <Radio.Button value="o"><span role="img" aria-label="dog-emoji">🐕</span> Другое</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="avatar"
        label="Изображение"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, загрузите своё фото!',
          },
        ]}
      >
        <UploadImage />
      </Form.Item>

      <Form.Item
        name="group-number"
        label="Номер группы"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите номер своей группы!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Следующий шаг
        </Button>
      </Form.Item>
    </Form>
  )
}

export default StudentAboutForm;