import React from 'react';
import Serials from '../../components/Serials/Serials';

const SerialsPage = () => {
    return (
        <section className='bg'>
            <div className='wrap'>
                <div className='position'>
                    <h1 className='title'>Сериалы</h1>
                </div>
                <Serials/>
            </div>
        </section>
    );
};

export default SerialsPage;