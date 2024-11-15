import React from 'react'
import {  Layout, theme } from 'antd';
import Navbar from './Navbar';
const { Header, Content, Footer } = Layout;
const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));
const HomeLayout = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
  return (
    <Layout>
    <Header
      style={{ 
        position:'sticky',
        top:0,
       }}
    >
     <Navbar />
    </Header>
    <Content
      style={{
        padding: '0 48px',
        margin:'20px 0',
        minHeight:'100vh',
      }}
    >
      
      <div
        style={{
          padding: 24,
          minHeight: 380,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        Content
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  </Layout>
  )
}

export default HomeLayout
