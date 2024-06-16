import React from 'react'

import { Skeleton, ConfigProvider } from 'antd'
const SkeletonLoad = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          controlHeight: '200',
        },
      }}
    >
      <div className="ant-skeleton-content">
        <Skeleton.Avatar
          active
          size={'large'}
          shape={'square'}
          className="block ant-skeleton-title"
        />
      </div>
    </ConfigProvider>
  )
}

export default SkeletonLoad
