import style from './SwiperMain.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Loading from '../Loading/Loading';
import uuid from 'react-uuid';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/swiper-bundle.css';



const SwiperMain = (props) => {

	return (
		<div className={style.flex} >
				<Swiper
					modules={[Autoplay]}
					autoplay={{
						delay: 2800,
					}}
					slidesPerView={3}
					spaceBetween={150}
				>
					{props.error ? (
						<>Oh no, there was an error</>
					) : props.isLoading ? (
						<Loading />
					) : props.data ? (
						props.data.items.map(films => (
							<SwiperSlide key={uuid()}>
								<div className={style.slide__img}>
									<img src={films.posterUrl} alt='poster' />
								</div>
							</SwiperSlide>
						))
					) : null
					}
				</Swiper >
			</div>
	);
};
export default SwiperMain