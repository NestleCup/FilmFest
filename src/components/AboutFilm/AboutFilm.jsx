import React from 'react';
import style from './AboutFilm.module.scss';
import { Rate, ConfigProvider, Typography } from 'antd';

import { useGetFilmsByIdQuery } from '../../services/KinopoiskApi'
import Breadcrumb from '../Breadcrumb/index';
import { getRate } from '../../utils/helpers/getRate'
import { useState } from 'react';
const { Paragraph } = Typography;

const AboutFilm = (props) => {
	const { data, error, isLoading } = useGetFilmsByIdQuery(props.kinopoiskId)
	return (
		<>
			<ConfigProvider
				theme={{
					token: {
						colorText: 'white'
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
									{data.logoUrl === null ||
										<div className={style.logo}>
											<img src={data.logoUrl} alt="logo" />
										</div>}
									<h2>
										{data.nameRu}
									</h2>
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
										<span>{data.slogan}</span>
									</div>
									<div className={style.description}>

										<Paragraph
											ellipsis={{
												expandable: true,
												maxLength: '200'
											}}
										>
											{data.description}
										</Paragraph>
									</div>

								</div>

							</div>

						</div>
					</div>
				) : null}
			</ConfigProvider >

		</>
	);
};

export default AboutFilm;