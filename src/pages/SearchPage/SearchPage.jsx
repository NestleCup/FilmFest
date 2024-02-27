import React from 'react';
import SearchResult from '../../components/HeaderPart/Search/component/SearchResult/SearchResult';

const SearchPage = () => {
    return (
        <section className='bg'>
            <div className='wrap'>
                <div className='position'>
                    <h1 className='title'>search</h1>
                    <SearchResult/>
                </div>
            </div>
        </section>
    );
};

export default SearchPage;