import React from 'react';
import Cartoons from '../../components/Cartoons/Cartoons';


const CartoonsPage = () => {
    return (

        <section className='bg'>
            <div className='wrap'>
                <div className='position'>
                    <h1 className='title'> Мультфильмы</h1>
                </div>
                <Cartoons/>
            </div>
        </section>

    );
};

export default CartoonsPage;
