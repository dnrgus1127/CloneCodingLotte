import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import '../css/Main.css'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import "swiper/css/effect-fade";
import BGImg1 from '../assets/images/main-img-business.gif'
import BGImg2 from '../assets/images/main-img-reqruit.gif'
import BGImg3 from '../assets/images/main-img-investment.gif'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import BGVideo1 from '../assets/images/video/Main_ESG.mp4'
import BGVideo2 from '../assets/images/video/Main_Factory.mp4'



const Container = styled.div`
    display: block;
    position: relative;
    width: 100%;
    overflow: hidden;

`

const MainBanner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
`

const StyledSwiper = styled(Swiper)`
    background-color: white;
    height: 100%;
    /* width: 300px; */
    .mainContentItem {
        position: relative;
        overflow: hidden;
        height: 100vh;

    }


`
const Bg = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    left: 0;
    top:0;
    video {
        position: absolute;
        z-index: inherit;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    .cover {
        position: absolute;
        top:0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.3);
    }
`

const Img = styled.img`
    /* width: 100%; */
    height: 100%;
    width: 100%;
    object-fit: cover;
    
`




export const Main = () => {
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    return (
        <Container style={{ height: vh }}>
            <MainBanner>
                <StyledSwiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                    spaceBetween={50}

                    slidesPerView={1}
                    scrollbar={{ draggable: true }}
                    navigation
                    // pagination={{ clickable: true }}
                    autoplay={{ delay: 2000 }}
                    loop={true}
                    effect='fade'
                    speed={1000}


                >
                    <SwiperSlide>
                        <Bg >
                            <video autoplay="autoplay" loop="loop" muted="muted" playsinline>
                                <source src={BGVideo2} type="video/mp4"></source>
                            </video>
                            <div className='cover'>
                            </div>
                        </Bg>
                    </SwiperSlide>
                    <SwiperSlide >
                        <Bg >
                            <video autoplay="autoplay" loop="loop" muted="muted" playsinline>
                                <source src={BGVideo1} type="video/mp4"></source>
                            </video>
                            <div className='cover'>
                            </div>
                        </Bg>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Bg>
                            <Img src={BGImg1} alt=''></Img>
                        </Bg>Bg
                    </SwiperSlide>
                    <SwiperSlide>
                        <Bg >
                            <Img src={BGImg2} alt=''></Img>
                        </Bg>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Bg >
                            <Img src={BGImg3} alt=''></Img>
                        </Bg>
                    </SwiperSlide>
                </StyledSwiper>

            </MainBanner>
        </Container>
    )
}
