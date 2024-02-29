import { Button, Descriptions } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';

import {
  DatePicker,
  Form,
  Input,
  InputNumber,
} from 'antd';


const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const items = [
  {
    key: '1',
    label: 'Mataerial Name',
    children: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
  },
  {
    key: '2',
    label: 'Engine Code',
    children: '2TR-FE',
  },
  {
    key: '3',
    label: 'Type',
    children: 'Petrol',
  },
  {
    key: '4',
    label: 'Quantity',
    children: '1',
  },
  {
    key: '5',
    label: 'Email',
    children: 'tamilinfo@gmail.com',
  },
];

const ReplayForm = () => {
  
  return (
    <div> 
      <h2 style={{textAlign:'center'}}>ReplayForm</h2>
    
    <div><Descriptions title="OrderNum:#123" items={items} />  <Button type="primary" >
  <Link to="/enquiryReplay">Back</Link>
</Button></div>

<br /> <br /> <br />
    <Form {...formItemLayout} variant="filled" style={{ maxWidth: 1200 }}>
    <Form.Item label="From-Email" name="FormMail" rules={[{ required: true, message: 'Please input!' }]}>
      <Input />
    </Form.Item>

    <Form.Item
      label="To-Email"
      name="ToMail"
      rules={[{ required: true, message: 'Please input!' }]}
    >
      <InputNumber style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item
      label="Details"
      name="details"
      rules={[{ required: true, message: 'Please input!' }]}
    >
      <Input.TextArea />
    </Form.Item>
   
    <Form.Item label="Upload-Images" name="img" rules={[{ required: true, message: 'Please input!' }]}>
      <Input type='file' />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
      <Button type="primary" htmlType="submit">
        <Link to="/" >Send to Mail</Link>
      </Button>
    </Form.Item>
  </Form>
</div>
  )
}

export default ReplayForm;