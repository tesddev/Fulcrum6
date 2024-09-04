import React from 'react';
import { Card, Col, Row, Statistic } from 'antd';

const Contain = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Card title="Number of users created" bordered={false}>
        <Statistic />
      </Card>
    </Col>
    <Col span={12}>
      <Card title="Number of products created" bordered={false}>
      <Statistic />
      </Card>
    </Col>
    
    
  </Row>
);
export default Contain;