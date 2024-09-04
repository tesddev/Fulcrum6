import React, { useState, useEffect } from 'react';
import Statistic from 'antd/es/statistic/Statistic';
import Head from '../Component/Header/Head';
import SkeletonAvatar from 'antd/es/skeleton/Avatar';
import Card from 'antd/es/card/Card';
import axios from 'axios';

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZDBmYWVhODA4YzBiNzZjZmRiZGI4ZiIsImVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTcyNDk3NjA3NCwiZXhwIjoxNzI0OTc5Njc0fQ.xJ7ksaq55CKuXMMZjXkEW56r3wtj7mrRH6zV3Hv-KgA'; // Replace with your actual token

        // Fetch total users count
        const usersResponse = await axios.get('http://localhost:8001/api/user/get-all-users-count', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserCount(usersResponse.data.count);response format

        // Fetch total products count
        const productsResponse = await axios.get('http://localhost:8001/api/product/get-all-products-count', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProductCount(productsResponse.data.count); // Adjust this according to the actual response format

        setLoading(false);
      } catch (error) {
        console.error('Error fetching counts:', error);
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div>
      <section className='h-10 relative -end-3/4 hover:size-full'>
        <SkeletonAvatar />
      </section>
      <section>
        <Head />
      </section>

      <Card loading={loading}>
        <Statistic title="Total Users" value={userCount} />
        <Statistic title="Total Products" value={productCount} />
      </Card>
    </div>
  );
};

export default Dashboard;
