import React from 'react';
import {
    Form,
    Select,
  } from 'antd';
const ModalForm = () => {
    const jenre ={
     name:   'Боевик', 
     name: 'Комедия', 
     name: 'Мультфильм'
    }
    return (
        <div>
            <Form.Item label="Жанр">
                <Select>
                    <Select.Option value="demo">{jenre.name}</Select.Option>
                </Select>
            </Form.Item>
        </div>
    );
};

export default ModalForm;