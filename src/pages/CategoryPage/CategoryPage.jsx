import React from 'react';
import JenreResult from '../../components/JenreResult/JenreResult';

const CategoryPage = () => {
  return (

    <section className='bg'>
      <div className='wrap position'>
        <h1 className='title'> Категория фильмов</h1>
        <JenreResult />
      </div>
    </section>

  );
};

export default CategoryPage;
