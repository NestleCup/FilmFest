import React from 'react';
import { Spin, ConfigProvider } from 'antd';

const Loading = () => {
  return (
    // <ConfigProvider
    //   theme={{
    //     token: {

    //     },
    //   }}
    // >
    <ConfigProvider
      theme={{
        components: {
          Spin: {
        /* here is your component tokens */  colorPrimary: 'red',
          },
        },
      }}
    >
      <div className='spin'> <Spin size="large" /></div>
     
    </ConfigProvider>

  );
};

export default Loading;