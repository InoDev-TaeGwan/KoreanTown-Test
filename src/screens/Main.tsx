import React from 'react';
import Swiper from 'react-native-swiper'; // 페이지 스와이프 라이브러리
import styled from '@emotion/native';
import {Text} from 'react-native';

const BoxRed = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: red;
`;
const BoxPink = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: pink;
`;
const BoxBlue = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;
const BoxGreen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: green;
`;
const BoxCoral = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: coral;
`;
const BoxOrange = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: orange;
`;

const Main = () => {
  return (
    <Swiper
      dotColor="rgba(0,0,0,.0)"
      activeDotColor="rgba(0,0,0,.0)"
      horizontal={false}
      loop={false}>
      <Swiper
        dotColor="rgba(0,0,0,.0)"
        activeDotColor="rgba(0,0,0,.0)"
        loop={false}
        index={1}>
        <BoxCoral>
          <Text>Left</Text>
        </BoxCoral>
        <BoxPink>
          <Text>Main</Text>
        </BoxPink>
        <BoxGreen>
          <Text>Right</Text>
        </BoxGreen>
      </Swiper>
      <Swiper
        dotColor="rgba(0,0,0,.0)"
        activeDotColor="rgba(0,0,0,.0)"
        loop={false}
        index={1}>
        <BoxRed>
          <Text>Left</Text>
        </BoxRed>
        <BoxBlue>
          <Text>Main</Text>
        </BoxBlue>
        <BoxGreen>
          <Text>Right</Text>
        </BoxGreen>
      </Swiper>
      <Swiper
        dotColor="rgba(0,0,0,.0)"
        activeDotColor="rgba(0,0,0,.0)"
        loop={false}
        index={1}>
        <BoxRed>
          <Text>Left</Text>
        </BoxRed>
        <BoxOrange>
          <Text>Main</Text>
        </BoxOrange>
        <BoxGreen>
          <Text>Right</Text>
        </BoxGreen>
      </Swiper>
    </Swiper>
  );
};

export default Main;
