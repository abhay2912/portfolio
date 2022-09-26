import React, { useContext } from 'react'
import "./Portfolio.css"
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';

import Sidebar from "../../img/sidebar.png";
import Ecommerece from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from '../../Context';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Protfolio'>
        {/* Heading section  */}
        
        <span style={{color: darkMode? 'White': ''}}>Recent Project</span>
        <span>Portfolio</span>

        {/* slider section  */}
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            
            grabCursor = {true}
            className = 'portfolio-slider'>
  
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerece} alt="" />
            </SwiperSlide>{" "}
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
            
        </Swiper>
        <div className="swiper"></div>
    </div>
  )
}

export default Portfolio