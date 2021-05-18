import React from 'react';
import styled from '@emotion/native';
import {Text} from 'react-native';
import HeartRegular from '../../assets/icons/HeartRegular';
import CommentRegular from '../../assets/icons/CommentRegular';
import PaperPlaneRegular from '../../assets/icons/PaperPlaneRegular';

const Container = styled.View`
  margin-top: 10px;
  padding-top: 5px;
  border-top-color: #999;
  border-top-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContentBox = styled.View`
  flex-direction: row;
`;

const Icon = styled.View`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

const CountText = styled.Text`
  color: #999;
  margin-left: 10px;
`;

const PostFooter = () => {
  return (
    <Container>
      <ContentBox>
        <Icon>
          <HeartRegular />
        </Icon>
        <Icon>
          <CommentRegular />
        </Icon>
        <Icon>
          <PaperPlaneRegular />
        </Icon>
      </ContentBox>
      <ContentBox>
        <CountText>좋아요 5개</CountText>
        <CountText>댓글 2개</CountText>
      </ContentBox>
    </Container>
  );
};

export default PostFooter;
