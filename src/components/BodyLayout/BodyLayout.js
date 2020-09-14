import React from 'react';
import { Layout } from 'antd';
import './BodyLayout.css';

const { Header, Content, Footer } = Layout;

function BodyLayout(props) {
  return (
    <Content className="layout">
      <div className="site-layout-content">
        {props.children}
      </div>
    </Content>
  )
}

export default BodyLayout;