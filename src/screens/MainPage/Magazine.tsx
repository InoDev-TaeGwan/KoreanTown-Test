import React from 'react';
import styled from '@emotion/native';
import {Text} from 'react-native';
import Header from '../../components/Header';

const BoxGreen = styled.View`
  flex: 1;
  background-color: green;
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

const Magazine = () => {
  return (
    <BoxGreen>
      <MainHeader>
        <Header />
      </MainHeader>
      <MainBody>
        <Text>Magazine</Text>
      </MainBody>
    </BoxGreen>
  );
};

export default Magazine;
