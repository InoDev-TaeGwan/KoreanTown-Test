import React from 'react';
import styled from '@emotion/native';
import Menu from '../assets/icons/Menu';
import {Platform, StyleSheet} from 'react-native';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 30px;
`;
const styles = StyleSheet.create({
  bottomIos: {
    ...Platform.select({
      ios: {
        marginBottom: 35,
      },
    }),
  },
});
const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Icon = styled.View`
  width: 25px;
  height: 25px;
`;

const BottomNavigation = () => {
  return (
    <Container style={styles.bottomIos}>
      <IconContainer>
        <Icon>
          <Menu color={'#fff'} />
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <Menu color={'#fff'} />
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <Menu color={'#fff'} />
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <Menu color={'#fff'} />
        </Icon>
      </IconContainer>
      <IconContainer>
        <Icon>
          <Menu color={'#fff'} />
        </Icon>
      </IconContainer>
    </Container>
  );
};

export default BottomNavigation;
