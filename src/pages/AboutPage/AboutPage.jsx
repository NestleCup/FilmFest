import React from 'react';
import style from './AboutPage.module.scss'
import AboutFilm from '../../components/AboutFilm/AboutFilm';
import { useParams } from 'react-router-dom';

const AboutPage = () => {
    const { kinopoiskId } = useParams()
    return (
        < >
            <AboutFilm kinopoiskId={kinopoiskId} />

        </>
    );
};
export { AboutPage };
