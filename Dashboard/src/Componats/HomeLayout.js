import React from 'react'
import {  Layout, theme } from 'antd';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './Navbar';
import Products from './Products';
import Orders from './Orders';
const { Header, Content, Footer } = Layout;

const HomeLayout = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
  return (
    <Layout>
       <Router>
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
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
    </Router>
  </Layout>
  )
}

export default HomeLayout;
