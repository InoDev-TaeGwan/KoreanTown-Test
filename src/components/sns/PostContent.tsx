import React from 'react';
import styled from '@emotion/native';
import Swiper from 'react-native-swiper';
import {View} from 'react-native';

const Container = styled.View`
  margin-top: 10px;
`;
const Text = styled.Text`
  margin-bottom: 20px;
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 200px;
`;

const PostImage = styled.Image`
  width: 100%;
  height: 200px;
`;

const TagList = styled.View`
  flex-direction: row;
`;
const Tag = styled.Text`
  font-size: 10px;
  padding: 5px;
  background-color: #999;
  margin-right: 10px;
  margin-top: 30px;
`;

const PostContent = () => {
  return (
    <Container>
      <View>
        <Text>
          오늘 제 남편이 몸이 좋지 않아 내과를 다녀왔어요. 그런데 그 병원에서
          한국인이라고 무시하네요. 혐한병원이에요 절대 가지 마세요!
        </Text>
      </View>
      <ImageContainer>
        <Swiper
          loop={true}
          dot={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#000',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
          paginationStyle={{
            bottom: -20,
          }}>
          {/*{PostImg.map((img: any, index: any) => (*/}
          {/*  <PostImage key={index} source={{uri: `${img.url}`}} />*/}
          {/*))}*/}
          <PostImage source={require('../../assets/images/taeyeon.jpg')} />
          <PostImage source={require('../../assets/images/taeyeon.jpg')} />
          <PostImage source={require('../../assets/images/taeyeon.jpg')} />
        </Swiper>
      </ImageContainer>
      <TagList>
        <Tag>#파리</Tag>
        <Tag>#병원</Tag>
        <Tag>#험한</Tag>
        <Tag>#내과</Tag>
      </TagList>
    </Container>
  );
};

export default PostContent;
