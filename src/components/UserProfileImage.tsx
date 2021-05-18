import React, {FC} from 'react';
import styled from '@emotion/native';
import {ImageSourcePropType} from 'react-native';

const ProfileImage = styled.Image(props => ({
  width: props.width,
  height: props.height,
  borderRadius: props.borderRadius,
}));

interface Props {
  width: number;
  height: number;
  source: ImageSourcePropType;
  borderRadius: number;
}

const UserProfileImage: FC<Props> = ({width, height, source, borderRadius}) => {
  return (
    <ProfileImage
      source={source}
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  );
};

export default UserProfileImage;
