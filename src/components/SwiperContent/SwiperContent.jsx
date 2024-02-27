import style from './SwiperContent.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import Loading from '../Loading/Loading';
import 'swiper/css/autoplay';

const SwiperContent = (props) => {

	return (
		<div className={style.flex} >
			<div >
				<Swiper
					modules={[Autoplay]}
					autoplay={{
						delay: 2800,
					}}
					slidesPerView={3.5}
					spaceBetween={50}
				>
					{props.error ? (
						<>Oh no, there was an error</>
					) : props.isLoading ? (
						<Loading />
					) : props.data ? (
						props.data.items.map(films => (
							<SwiperSlide key={films.kinopoiskId}>
								<div className={style.slide__img}>
									<img src={films.posterUrl} alt='poster' />
								</div>
							</SwiperSlide>
						))
					) : null
					}
				</Swiper >
			</div>
		</div>
	);
};
export default SwiperContent