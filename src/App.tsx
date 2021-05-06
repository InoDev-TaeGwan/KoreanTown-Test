import React from 'react';
import styled from '@emotion/native';
import {Text} from 'react-native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <Text style={{fontSize: 100}}>test</Text>
    </Container>
  );
};

export default App;
