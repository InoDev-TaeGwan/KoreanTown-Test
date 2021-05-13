import React from 'react';
import styled from '@emotion/native';
import {Text, Image} from 'react-native';
import Header from '../../components/Header';
import images from '../../assets/images/BerlinBG.jpg';

const Container = styled.ImageBackground`
  flex: 1;
`;
const MainHeader = styled.View`
  padding-top: 30px;
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

const image = Image.resolveAssetSource(images).uri; // 백그라운드 이미지 설정

const Magazine = () => {
  return (
    <Container source={{uri: image}}>
      <MainHeader>
        <Header magazine />
      </MainHeader>
      <MainBody>
        <Text>Magazine</Text>
      </MainBody>
    </Container>
  );
};

export default Magazine;
