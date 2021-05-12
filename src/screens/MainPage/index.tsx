import React from 'react';
import Swiper from 'react-native-swiper'; // 페이지 스와이프 라이브러리

import Magazine from './Magazine';
import Sns from './Sns';
import CityTab from '../../navigations/tabs/CityTab';

const MainPage = () => {
  return (
    <Swiper
      dotColor="rgba(0,0,0,.0)"
      activeDotColor="rgba(0,0,0,.0)"
      loop={false}
      index={1}>
      <Magazine />
      <CityTab />
      <Sns />
    </Swiper>
  );
};

export default MainPage;
