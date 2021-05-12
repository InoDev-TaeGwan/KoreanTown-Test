import React from 'react';
import styled from '@emotion/native';
import HeaderIcon from '../assets/icons/HeaderIcon';
import Menu from '../assets/icons/Menu';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;
const IconContainer = styled.View`
  width: 50px;
  height: 50px;
`;

const Header = () => {
  return (
    <Container>
      <IconContainer>
        <Menu />
      </IconContainer>
      <IconContainer>
        <HeaderIcon />
      </IconContainer>
    </Container>
  );
};

export default Header;
