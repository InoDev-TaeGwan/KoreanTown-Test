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
  handleBookmark: any;
  bookmark: boolean;
  like: boolean;
  handleLike: () => void;
}

const Post: FC<Props> = ({
  nickname,
  spot,
  handleBookmark,
  bookmark,
  like,
  handleLike,
}) => {
  return (
    <Container>
      <PostHeader
        nickname={nickname}
        spot={spot}
        handleBookmark={handleBookmark}
        bookmark={bookmark}
      />
      <PostContent />
      <PostFooter like={like} handleLike={handleLike} />
    </Container>
  );
};

export default Post;
