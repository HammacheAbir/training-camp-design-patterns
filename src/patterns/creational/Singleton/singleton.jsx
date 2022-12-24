import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';

const Singleton = () => {
  return (
      <div style={{marginTop:"100px"}}>
      <Form>
        <Form.Item label="Field A">
            <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Field B">
            <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item >
            <Button type="primary">Submit</Button>
        </Form.Item>
        </Form>
    
      </div>
    );
};
export default Singleton;