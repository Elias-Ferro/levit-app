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
            className='swiperhaha'
        >
            <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='swiper'>
            <img src="/images/levit_home.png" alt="Slide 1" style={{ width: '80%', height: '80%', objectFit: 'cover' }} />
            <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                  textAlign: 'center',
                  padding: '20px',
                  background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
                  borderRadius: '8px'
                }}
              >
                <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Bem-vindo ao <span style={{color: "#2130B9"}}>Levit!</span></h1>
                <p style={{ fontSize: '2rem' }}>
                  O Levit é a solução ideal para gerenciar as escalas da sua igreja de forma eficiente e prática.
                  Organize os dias da semana e mantenha tudo sob controle com facilidade. 
                  Explore as funcionalidades e descubra como podemos ajudar a otimizar seu dia a dia!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='swiper'>
            <img src="/images/levit_home.png" alt="Slide 2" style={{ width: '80%', height: '80%', objectFit: 'cover' }} />
            <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                  textAlign: 'center',
                  padding: '20px',
                  background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
                  borderRadius: '8px'
                }}
              >
                <p style={{ fontSize: '3rem' }}>
                  Cadastre membros. <br />
                  Visualize os departamentos. <br />
                  Confira as datas. <br />
                  Inove a sua igreja com o <span style={{color: "#2130B9"}}>Levit!</span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='swiper'>
            <img src="/images/levit_home.png" alt="Slide 3" style={{ width: '80%', height: '80%', objectFit: 'cover' }} />
            <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                  textAlign: 'center',
                  padding: '20px',
                  background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
                  borderRadius: '8px'
                }}
              >
                <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Gerenciar escalas nunca
                  foi tão fácil! Use o <span style={{color: "#2130B9"}}>Levit</span> agora!</h1>
                </div>
            </SwiperSlide>
        </Swiper>
    <div/>
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      style={{ width: '100%', height: '100%' }}
      className='mobile-swiper'
    >
      <SwiperSlide>
        <img src="/images/levit_home.png" alt="Slide 1" />
        <div>
          <h2>Bem-vindo ao <span style={{ color: "#2130B9" }}>Levit!</span></h2>
          <p>
            O Levit é a solução ideal para gerenciar as escalas da sua igreja de forma eficiente e prática.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/levit_home.png" alt="Slide 2" />
        <div>
          <p>
            Cadastre. 
            Visualize os departamentos. 
            Confira as datas. 
            Inove a sua igreja com o <span style={{ color: "#2130B9" }}>Levit!</span>
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/levit_home.png" alt="Slide 3" />
        <div>
          <h2>Gerenciar escalas nunca foi tão fácil! Use o <span style={{ color: "#2130B9" }}>Levit</span> agora!</h2>
        </div>
      </SwiperSlide>
    </Swiper>
    </>
  );
}

export default Home;
