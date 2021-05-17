import React from 'react';
import styled from '@emotion/native';
import {Text} from 'react-native';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import HashTag from '../../components/sns/HashTag';

const NoneColor = styled.View`
  flex: 1;
  background-color: #fff;
`;
const MainHeader = styled.View`
  flex: 1;
  justify-content: center;
  //border: 1px solid red;
`;
const MainBody = styled.View`
  flex: 10;
  align-items: center;
  justify-content: center;
  //border: 1px solid blue;
`;

const Sns = () => {
  return (
    <Layout>
      <NoneColor>
        <MainHeader>
          <Header sns />
        </MainHeader>
        <HashTag />
        <MainBody>
          <Text>SNS</Text>
        </MainBody>
      </NoneColor>
    </Layout>
  );
};

export default Sns;
