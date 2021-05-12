import React from 'react';
import styled from '@emotion/native';
import {Text} from 'react-native';

const BoxGreen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: green;
`;

const Magazine = () => {
  return (
    <BoxGreen>
      <Text>Magazine</Text>
    </BoxGreen>
  );
};

export default Magazine;
