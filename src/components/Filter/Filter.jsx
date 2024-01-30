import React from 'react';
import style from "./Filter.module.scss"

import {
    Form,
    Select,
    InputNumber,
    ConfigProvider
} from 'antd';
const Filter = () => {
    const jenre = [
        { id: '1', name: 'Боевик' },
        { id: '2', name: 'Комедия' },
        { id: '3', name: 'Мультфильм' }
    ]
    const year = [
        { id: '1', year: 'Боевик' },
        { id: '2', year: 'Комедия' },
        { id: '3', name: 'Мультфильм' }
    ]
    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Form: {
                            labelColor: 'white',
                            controlHeight: 100,
                            colorPrimary: 'red',
                            labelFontSize: 20,
                        },
                    },
                }}
            >
                <Form className={style.form}>
                    <Form.Item label="Жанр" className={style.form__genre}>
                        <Select>
                            {jenre.map(jenreSelect => {
                                return (
                                    <Select.Option  value={jenreSelect.name} key={jenreSelect.id} >{jenreSelect.name}</Select.Option>
                                )
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item label="Год"  className={style.form__year}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="Рейтинг" className={style.form__rating}>
                        <InputNumber  />
                    </Form.Item>
                </Form>
            </ConfigProvider>



        </>
    );
};

export default Filter;