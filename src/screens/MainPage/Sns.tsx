import React from 'react';
import styled from '@emotion/native';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import HashTag from '../../components/sns/HashTag';
import RangeSlider from '../../components/sns/RangeSlider';
import Post from '../../components/sns/Post';
import {snsPostlist} from '../../utils/db';

const NoneColor = styled.View`
  flex: 1;
  background-color: #fff;
`;
const MainHeader = styled.View`
  flex: 1;
  justify-content: center;
  //border: 1px solid red;
`;
const MainBody = styled.ScrollView`
  flex: 10;
  //padding: 10px 20px;
  background-color: #999;
`;

// console.log(snsPostlist.map(list => list.image));

const Sns = () => {
  return (
    <Layout>
      <NoneColor>
        <MainHeader>
          <Header sns />
        </MainHeader>
        <HashTag />
        <RangeSlider />
        <MainBody>
          {snsPostlist.map(list => (
            <Post
              key={list.id}
              nickname={list.nickName}
              spot={list.spot}
              // PostImg={list.image}
            />
          ))}
        </MainBody>
      </NoneColor>
    </Layout>
  );
};

export default Sns;
