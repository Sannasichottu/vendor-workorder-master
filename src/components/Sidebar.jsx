import React, { useState } from 'react'
import {
    AuditOutlined,
    BorderlessTableOutlined,
    CheckCircleOutlined,
    DashboardOutlined,
    DatabaseOutlined,
    DeliveredProcedureOutlined,
    FormOutlined,
    HistoryOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MoneyCollectOutlined,
    VerifiedOutlined,
  } from '@ant-design/icons';

  import { Layout, Menu, Button, theme } from 'antd';
import { Route, Routes,  useNavigate } from 'react-router-dom';
import EnquiryReplay from './EnquiryReplay/EnquiryReplay';
import OrderVerify from './OrderVerify';
import Acknowledgement from './Acknowledgement';
import QuoteGenerate from './QuoteGenerate';
import OrderStatus from './OrderStatus';
import OrderHistory from './OrderHistory';
import InvoiceHistory from './InvoiceHistory';
import PaymentConfirm from './PaymentConfirm';
import DeliveryTrack from './DeliveryTrack';
import VendorDashboard from './Dashboard/VendorDashboard';
import ReplayForm from './EnquiryReplay/ReplayForm';
const { Header, Sider, Content } = Layout;


const Sidebar = () => {

    let navigate = useNavigate();

    const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '0.1',
            label:  'Logo',
            onClick: () => { navigate('/')}
            
          },
          {
            key: '0',
            icon: <DashboardOutlined />,
            label:  'Dashboard',
            onClick: () => { navigate('/dashboard')}
            
          },
          {
            key: '1',
            icon: <FormOutlined />,
            label:  'Enquiry Form Replay',
            onClick: () => { navigate('/enquiryReplay')}
            
          },
          {
            key: '2',
            icon: <VerifiedOutlined />,
            label: 'Order Verification',
            onClick: () => { navigate('/orderVerify')}
          },
          {
            key: '3',
            icon:<DatabaseOutlined />,
            label: 'Quote Generation',
            onClick: () => { navigate('/quoteGen')}
            
          },
          {
            key: '4',
            icon: <CheckCircleOutlined />,
            label: 'Acknowledgement',
            onClick: () => { navigate('/acknoeledgement')}
            
          },
          
          {
            key: '5',
            icon: <BorderlessTableOutlined />,
            label: 'Order Status',
            onClick: () => { navigate('/orderStatus')}
          },
          {
            key: '6',
            icon: <HistoryOutlined />,
            label: 'Order History',
            onClick: () => { navigate('/orderHistory')}
          },
          {
            key: '7',
            icon: <AuditOutlined />,
            label: 'Invoice',
            onClick: () => { navigate('/invoice')}
          },
         
          {
            key: '8',
            icon: <MoneyCollectOutlined />,
            label: 'Payment Confirmation',
            onClick: () => { navigate('/paymentConfirm')}
          },
          {
            key: '9',
            icon: <DeliveredProcedureOutlined />,
            label: 'Delivery tracking',
            onClick: () => { navigate('/deliveryTrack')}
          },
        ]}
      />
    </Sider>
    <Layout>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      </Header>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          height: '50em',
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
       <Routes>
            <Route exact path="/" element={<VendorDashboard />} />
            <Route exact path="/dashboard" element={<VendorDashboard /> } />
            <Route exact path="/enquiryReplay" element={<EnquiryReplay /> } />
            <Route exact path="/orderVerify" element={<OrderVerify /> } />
            <Route exact path="/acknoeledgement" element={<Acknowledgement /> } />
            <Route exact path="/quoteGen" element={<QuoteGenerate /> } />
            <Route exact path="/orderStatus" element={<OrderStatus /> } />
            <Route exact path="/orderHistory" element={<OrderHistory /> } />
            <Route exact path="/invoice" element={<InvoiceHistory /> } />
            <Route exact path="/PaymentConfirm" element={<PaymentConfirm /> } />
            <Route exact path="/deliveryTrack" element={<DeliveryTrack /> } />
            
            <Route exact path='/replayForm' element={<ReplayForm /> } />
           
          </Routes>
      </Content>
    </Layout>
  </Layout>
  )
}

export default Sidebar