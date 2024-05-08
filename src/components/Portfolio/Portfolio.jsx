import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import music from "../../img/music.jpg";
import advice from "../../img/advice.PNG";
import currencyconverter from "../../img/currencyconverter.PNG";
import bmi from "../../img/bmi.PNG";
import bookstore from "../../img/bookstore.PNG";
import login_register from "../../img/login_register.PNG";
import movieapp from "../../img/movieapp.PNG";
import qrcode from "../../img/qrcode.PNG";
import weather from "../../img/weather.PNG";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
       <SwiperSlide>
          <a href="https://music-app-fawn-six.vercel.app/"><img src={music} alt="" /></a>
          <h3>Music App</h3>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://advice-app-khaki.vercel.app/"><img src={advice} alt="" /></a>
          <h3>Advice App</h3>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://bmi-app-react.vercel.app/"><img src={bmi} alt="" /></a>
          <h3>BMI calculator</h3>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://currency-converter-react-theta.vercel.app/"><img src={currencyconverter} alt="" /></a>
          <h3>Currency Converter</h3>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://qrcode-react-two.vercel.app/"><img src={qrcode} alt="" /></a>
          <h3>QR code Generator</h3>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://weather-app-five-tan-64.vercel.app/"><img src={weather} alt="" /></a>
          <h3>Weather App</h3>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/S-M-Vaishnavi/movie-app.git"><img src={movieapp} alt="" /></a>
          <h3>Movie App</h3>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/S-M-Vaishnavi/book-store.git"><img src={bookstore} alt="" /></a>
          <h3>Book Store</h3>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/S-M-Vaishnavi/Login-Register-React.git"><img src={login_register} alt="" /></a>
          <h3>Login-Register</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
