import React from 'react';
import Swiper from 'react-native-swiper'; // 페이지 스와이프 라이브러리
import MainPage from './MainPage';

const Main = () => {
  return (
    <Swiper
      dotColor="rgba(0,0,0,.0)"
      activeDotColor="rgba(0,0,0,.0)"
      horizontal={false}
      loop={false}>
      <MainPage />
    </Swiper>
  );
};

export default Main;
