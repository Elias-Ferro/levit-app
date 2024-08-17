import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '../components/Header'
import { useNavigate } from "react-router-dom";
import '/node_modules/swiper/swiper.min.css';
import './home.css'


function Home() {
  const navigate = useNavigate();

  return (
    <>
    <title>Home</title>
    <Header/>
    <div ></div>
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            style={{ width: '100%', height: '100%' }}
            className='swiper'
        >
            <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='swiper'>
            <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </SwiperSlide>
            <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='swiper'>
            <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </SwiperSlide>
            <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='swiper'>
            <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </SwiperSlide>
        </Swiper>
    <div/>
    </>
  );
}

export default Home;
