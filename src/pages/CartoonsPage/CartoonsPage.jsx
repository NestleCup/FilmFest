import React from 'react';
import Cartoons from '../../components/Cartoons/Cartoons';
import style from './CartoonsPage.module.scss'

const CartoonsPage = () => {
    return (

        <section className='bg'>
            <div className='wrap'>
                <div className={style.container}>
                    <h1 className='title'> Мультфильмы</h1>
                <Cartoons/>
                </div>

            </div>
        </section>

    );
};

export default CartoonsPage;
