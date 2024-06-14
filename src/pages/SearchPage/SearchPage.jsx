import React from 'react';
import Search from '../../components/Search/Search';
import PaginationFilms from '../../components/PaginationFilms/PaginationFilms';
const SearchPage = () => {
    return (
        <section className='bg'>
            <div className='bg__fill'>
                <div className='wrap__search'>
                    <div className='position'>
                        <p className='title'>Поиск фильмов</p>
                        <Search />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchPage;