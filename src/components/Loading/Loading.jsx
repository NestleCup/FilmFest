import React from 'react';
import { Spin, ConfigProvider } from 'antd';

const Loading = () => {
  return (

    <ConfigProvider
      theme={{
        components: {
          Spin: {
            colorPrimary: 'red',
          },
        },
      }}
    >
      <div className='spin'> <Spin size="large" /></div>
    </ConfigProvider>

  );
};

export default Loading;