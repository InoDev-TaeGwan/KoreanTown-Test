import React from 'react';
import styled from '@emotion/native';
import {Image} from 'react-native';
import Header from '../../components/Header';
import images from '../../assets/images/BerlinBG.jpg';
import Layout from '../../components/Layout';
import MapMarker from '../../assets/icons/MapMarker';

const Container = styled.ImageBackground`
  flex: 1;
`;
const MainHeader = styled.View`
  flex: 1;
  justify-content: center;
  //border: 1px solid red;
  margin-top: 35px; // ios 에서 만 적용하게 만들 것.
`;
const MainBody = styled.View`
  flex: 10;
  //border: 1px solid blue;
`;
const ContentBox = styled.View`
  margin: 50px 0 0 20px;
`;
const HashTagContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;
const MagazineTitle = styled.View`
  margin-bottom: 30px;
`;
const Title = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: bold;

  &:first-child {
    margin-bottom: 10px;
  }
`;
const HashTag = styled.Text`
  margin-right: 20px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
const SpotContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.View`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;
const SpotName = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

const image = Image.resolveAssetSource(images).uri; // 백그라운드 이미지 설정

const Magazine = () => {
  return (
    <Layout notchNone>
      <Container source={{uri: image}}>
        <MainHeader>
          <Header magazine />
        </MainHeader>
        <MainBody>
          <ContentBox>
            <MagazineTitle>
              <Title>Berlin에서 즐기는</Title>
              <Title>한옥 카페</Title>
            </MagazineTitle>
            <HashTagContainer>
              <HashTag>#레트로</HashTag>
              <HashTag>#카페</HashTag>
              <HashTag>#전통</HashTag>
              <HashTag>#데이트코스</HashTag>
            </HashTagContainer>
            <SpotContainer>
              <Icon>
                <MapMarker color="#fff" />
              </Icon>
              <SpotName>Berlin</SpotName>
            </SpotContainer>
          </ContentBox>
        </MainBody>
      </Container>
    </Layout>
  );
};

export default Magazine;
