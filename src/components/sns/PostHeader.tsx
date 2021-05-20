import React, {FC, memo, useCallback, useState} from 'react';
import styled from '@emotion/native';
import UserProfileImage from '../UserProfileImage';
import BookmarkSolid from '../../assets/icons/BookmarkSolid';
import BookmarkRegular from '../../assets/icons/BookmarkRegular';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
const ContentBox = styled.View`
  margin-left: 15px;
`;
const NickName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const TimeSpot = styled.View`
  flex-direction: row;
`;
const Time = styled.Text`
  color: #999;
  margin-right: 10px;
`;
const Spot = styled.Text``;
const BookMark = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`;

interface Props {
  nickname: string;
  spot: string;
  handleBookmark: any;
  bookmark: boolean;
}

const PostHeader: FC<Props> = memo(
  ({nickname, spot, handleBookmark, bookmark}) => {
    return (
      <Container>
        <UserInfo>
          <UserProfileImage
            width={60}
            height={60}
            source={require('../../assets/images/taeyeon.jpg')}
            borderRadius={30}
          />
          <ContentBox>
            <NickName>{nickname}</NickName>
            <TimeSpot>
              <Time>5분 전</Time>
              <Spot>{spot}</Spot>
            </TimeSpot>
          </ContentBox>
        </UserInfo>
        <BookMark onPress={handleBookmark}>
          {bookmark ? <BookmarkSolid color={'#df8d6f'} /> : <BookmarkRegular />}
        </BookMark>
      </Container>
    );
  },
);

export default PostHeader;
