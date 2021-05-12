import React from 'react';
import styled from '@emotion/native';
import {Text} from 'react-native';

const BoxGreen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: green;
`;

const Sns = () => {
  return (
    <BoxGreen>
      <Text>Sns</Text>
    </BoxGreen>
  );
};

export default Sns;
