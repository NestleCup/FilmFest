import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Breadcrumb } from 'antd';
import style from './CartoonsPage.module.scss'

const CartoonsPage = () => {
    return (
        <>
        <div className={style.breadcrumb}>
            <Breadcrumb 
                items={[
                    {   
                        href: '/main',
                        title: <HomeOutlined />,
                    },
                    {
                        href: '',
                        title: (
                            <>
                                <UserOutlined />
                                <span>Мультфильмы</span>
                            </>
                        ),
                    },
                ]}    
            />
        </div >
      <h1 style={{color:"white"}}> CartoonsPage</h1> 
        </>
    );
};

export default CartoonsPage;