import {React, Fragment} from 'react';
import style from "./SwiperJenre.module.scss"
import { jenreImg } from '../../utils/const/swiperImage'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import 'swiper/css';
import { EffectFade, EffectCoverflow, Pagination } from 'swiper/modules';
import { Tabs } from 'antd';
import { Tab, TabList, TabPanel, Tabs as ReactTabs } from 'react-tabs';
import classNames from 'classnames';

const SwiperJenre = () => {
    const tabs = [  
        { txt: 'Таб 1', content: <p>Контент таба 1</p> },
        { txt: 'Таб 2', content: <p>Контент таба 2</p> },
        { txt: 'Таб 3', content: <p>Контент таба 3</p> },
    ];
    return (
    //     <ReactTabs selectedTabClassName={style.selected} className={classNames(style.tabs)}>
    //     <div className={style.container}>
    //         <TabList className={style.list}>
    //             {tabs.map((el) => {
    //                 const { txt, condition = true } = el;

    //                 return (
    //                     <Fragment key={txt}>
    //                         {condition ? <Tab className={style.tab}>{txt}</Tab> : null}
    //                     </Fragment>
    //                 );
    //             })}
    //         </TabList>
    //     </div>
    //     {tabs.map((el) => {
    //         const { txt, content, condition = true } = el;

    //         return (
    //             <Fragment key={txt}>{condition ? <TabPanel>{content}</TabPanel> : null}</Fragment>
    //         );
    //     })}
    // </ReactTabs>
        <div className='wrap'>
            <Swiper
                // centeredSlides='true'
                slidesPerView={4.5}
                spaceBetween={50}
                modules={[EffectFade]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 2,
                    },
                    639: {
                        slidesPerView: 3,
                    },
                    865: {
                        slidesPerView: 4
                    },
                    1000: {
                        slidesPerView: 5
                    },
                    1500: {
                        slidesPerView: 6
                    },
                    1700: {
                        slidesPerView: 7
                    }
                }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                <div className={style.jenre__card}>
                    {jenreImg.map(jenre => {
                        return (
                            <SwiperSlide key={jenre.id} >
                         
                                <div className={style.card} >
                                    <img src={jenre.urls} alt="icon" />
                                    <p>{jenre.name}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </div>
            </Swiper>
        </div >
    );
};
export default SwiperJenre;