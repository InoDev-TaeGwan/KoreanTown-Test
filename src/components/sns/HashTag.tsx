import React from 'react';
import styled from '@emotion/native';
import {snsList} from '../../utils/db';

const Container = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #999;
`;
const Scroll = styled.ScrollView`
  width: 100%;
  height: 90px;
  padding: 10px 10px;
`;

// @ts-ignore
const HashTagItem = styled.View`
  width: 70px;
  height: 70px;
  margin: 0 10px;
  border: 1px solid black;
  border-radius: 50px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.active && 'yellow'};
`;

const HashTagName = styled.Text`
  font-weight: bold;
`;

const HashTag = () => {
  return (
    <Container>
      <Scroll horizontal={true} showsHorizontalScrollIndicator={false}>
        {/*
          showsHorizontalScrollIndicator 는 가로 스크롤바
          showsVerticalScrollIndicator 는 세로 스크롤바
        */}

        {snsList.map(sns => (
          <HashTagItem key={sns.id} active={sns.active}>
            <HashTagName>{`#${sns.hashtag}`}</HashTagName>
          </HashTagItem>
        ))}
      </Scroll>
    </Container>
  );
};

export default HashTag;
