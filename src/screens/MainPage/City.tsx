import React from 'react';
import styled from '@emotion/native';
import {Text} from 'react-native';
import Header from '../../components/Header';
import CityBerlin from '../../assets/icons/CityBerlin';
import Layout from '../../components/Layout';

const NoneColor = styled.View`
  flex: 1;
  background-color: #fff;
`;
const MainHeader = styled.View`
  flex: 1;
  justify-content: center;
  border: 1px solid red;
`;

const MainBody = styled.View`
  flex: 10;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
`;

const City = () => {
  return (
    <Layout>
      <NoneColor>
        <MainHeader>
          <Header main />
        </MainHeader>
        <MainBody>
          <CityBerlin />
          <Text>베를린, Berlin</Text>
        </MainBody>
      </NoneColor>
    </Layout>
  );
};

export default City;
