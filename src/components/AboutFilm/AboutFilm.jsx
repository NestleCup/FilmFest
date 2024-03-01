import { useState } from 'react';
import style from './AboutFilm.module.scss';
import { useGetFilmsByIdQuery } from '../../services/KinopoiskApi'
import Breadcrumb from '../Breadcrumb/index';
import { getRate } from '../../utils/helpers/getRate'
import { Divider, Rate, ConfigProvider, Typography } from 'antd';
import { useParams } from 'react-router-dom';
import Actors from './Actors/Actors';
import Reviews from './Reviews/Reviews';
import Player from './Player/Player';
import SimilarFilms from './SimilarFilms/SimilarFilms';

const { Paragraph } = Typography;

const AboutFilm = () => {
	const { kinopoiskId } = useParams()
	const { data, error, isLoading } = useGetFilmsByIdQuery(kinopoiskId)
	const [ellipsis, setEllipsis] = useState(true);
	return (
		<>
			<ConfigProvider
				theme={{
					token: {
						colorLink: '#fa4d4d',
						colorText: 'white',
						fontSize: 20,
						fontFamilyCode: 'Jura',
						colorSplit: '#1C1E2A'
					},
				}}
			>
				{error ? (
					<>Oh no, there was an error</>
				) : isLoading ? (
					<div>Loading</div>
				) : data ? (
					<div className={style.background}
						style={{ backgroundImage: `url('${data.coverUrl}')` }}>
						<div className={style.filter}>
							<div className='wrap'>
								<div className={style.crumbs}>
									<Breadcrumb />
								</div>
								<div className={style.container}>
									{data.logoUrl ?
										<div className={style.logo}>
											<img src={data.logoUrl} alt="logo" />
										</div> :
										<h2>
											{data.nameRu}
										</h2>}
									{data.ratingKinopoisk === null ||
										<Rate allowHalf
											count={5}
											disabled={true}
											defaultValue={getRate(Math.floor(data.ratingKinopoisk))} />
									}
									<div className={style.about}>
										<span>{data.year}</span>&nbsp;
										<span>{data.genres.map(
											(genre) => genre.genre).join(' , ')}
										</span>&nbsp;
										<span	>{data.countries.map(
											(country) => country.country).join(' , ')}
										</span>
									</div>
									<div className={style.slogan}>
										<span className={style.slogan}>{data.slogan}</span>
									</div>
									<div className={style.description}>
										<Paragraph ellipsis={ellipsis ? { rows: 4, expandable: true, symbol: 'подробнее' } : false}>
											{data.description}
										</Paragraph>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : null}
				<div className='wrap'>
					<Divider />
				</div>
				<section>
					<Player />
				</section>
				<Actors />
				<Reviews />
				<SimilarFilms />
			</ConfigProvider  >
		</>
	);
};

export default AboutFilm;