import React, {FC} from 'react';
import styled from '@emotion/native';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';

const Container = styled.View`
  background-color: #fff;
  padding: 10px 20px;
  margin-bottom: 5px;
`;

interface Props {
  nickname: string;
  spot: string;
}

const Post: FC<Props> = ({nickname, spot}) => {
  return (
    <Container>
      <PostHeader nickname={nickname} spot={spot} />
      <PostContent />
      <PostFooter />
    </Container>
  );
};

export default Post;
