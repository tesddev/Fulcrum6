import React from 'react';
import { Card } from 'antd';
import RechartsBarChart from './Header/RechartsBarChart';
const Charts = () => (
  <Card
    title="Card title"
    bordered={false}
    style={{
      width: 300,
    }}
  >
    <RechartsBarChart />
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);
export default Charts;