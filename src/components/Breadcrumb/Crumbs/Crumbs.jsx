import React from 'react';
import { Breadcrumb, ConfigProvider } from 'antd';
import {useLocation} from 'react-router-dom'


const Crumbs = () => {

  return (
    //  <Breadcrumb routes={[{ breadcrumbName: 'sample' }]} />;
    <ConfigProvider
      theme={{
        components: {
          Breadcrumb: {
            itemColor: 'white',
            lastItemColor:'white',
            linkColor:'white',
            linkHoverColor:'white',
            separatorColor:'white',
            separatorMargin: 1
          },
        },
      }}
    >
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: <a href="">Application Center</a>,
          },
          {
            title: <a href="">Application List</a>,
          },
          {
            title: 'An Application',
          },
        ]}
      />
    </ConfigProvider>

  );
};

export default Crumbs;