'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './home.css';
import { Mousewheel, Pagination } from 'swiper/modules';
import Hero from '../LandingSection/Hero';
import AboutSec from '../About/AboutSec';
import TechStacks from '../TechStaks/TechStacks';
import Project from '../Projects/Project';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const HomePage = () => {
    return (
        <div>
            <div>
                <Swiper
                    direction={'vertical'}
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Mousewheel, Pagination]}
                    style={{ height: '100vh' }}
                >
                    <SwiperSlide style={{ height: '100vh' }}>
                        <Hero />
                    </SwiperSlide>
                    <SwiperSlide style={{ height: '100vh' }}>
                        <AboutSec />
                    </SwiperSlide>
                    <SwiperSlide style={{ height: '100vh' }}>
                        <TechStacks />
                    </SwiperSlide>
                    <SwiperSlide style={{ height: '100vh', overflow: 'auto' }}>
                      <Projects/>
                    </SwiperSlide>
                    <SwiperSlide style={{ height: '100vh'}}>
                       <Contact/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HomePage;
