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

const optionsSkills = [
  { label: 'Frontend', value: 'Frontend' },
  { label: 'DevOps', value: 'DevOps' },
  { label: 'Data Scientist', value: 'Data Scientist' },
  { label: 'IOS Developer', value: 'IOS Developer' },
  { label: 'Backend', value: 'Backend' },
  { label: 'MLOps', value: 'MLOps' },
  { label: 'Data Engeneer', value: 'Data Engeneer' },
  { label: 'Android Developer', value: 'Android Developer' },
];

function StudentSkillsForm() {
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
        name="skills-owned"
        label="Выберите направления которыми владеешь"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, выберите направление!',
          },
        ]}
      >
        <Checkbox.Group options={optionsSkills} />
      </Form.Item>

      <Form.Item
        name="my-skills"
        label="Выберите свои навыки"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, выберите свои навыки!',
          },
        ]}
      >
        <Select
          mode="tags"
          allowClear
          style={{ width: '100%' }}
          placeholder=""
        >
        </Select>
      </Form.Item>

      <Form.Item
        name="github"
        label="GitHub Account"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите ссылку на GitHub!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="skills-to-get"
        label="Какое направление хочешь прокачать?"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, выберите направление!',
          },
        ]}
      >
        <Checkbox.Group options={optionsSkills} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Следующий шаг
        </Button>
      </Form.Item>
    </Form>
  )
}

export default StudentSkillsForm;