import React from 'react';
import styled from '@emotion/native';
import {Text} from 'react-native';
import Header from '../../components/Header';
import CityBerlin from '../../assets/icons/CityBerlin';

const NoneColor = styled.View`
  flex: 1;
  background-color: #fff;
`;
const MainHeader = styled.View`
  flex: 1;
  justify-content: center;
  border: 1px solid red;
  padding-top: 30px;
`;

const MainBody = styled.View`
  flex: 10;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
`;

const City = () => {
  return (
    <NoneColor>
      <MainHeader>
        <Header main />
      </MainHeader>
      <MainBody>
        <CityBerlin />
        <Text>베를린, Berlin</Text>
      </MainBody>
    </NoneColor>
  );
};

export default City;
