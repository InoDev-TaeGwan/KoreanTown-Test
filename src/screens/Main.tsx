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

const Main = () => {
  return (
    <Swiper
      dotColor="rgba(0,0,0,.0)"
      activeDotColor="rgba(0,0,0,.0)"
      index={1}
      horizontal={false}
      loop={false}>
      <BoxPink>
        <Text>1page</Text>
      </BoxPink>
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
      <BoxRed>
        <Text>3page</Text>
      </BoxRed>
    </Swiper>
  );
};

export default Main;
