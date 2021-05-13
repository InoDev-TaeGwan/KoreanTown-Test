import React, {VFC} from 'react';
import styled from '@emotion/native';
import HeaderIcon from '../assets/icons/HeaderIcon';
import Menu from '../assets/icons/Menu';
import SearchIcon from '../assets/icons/SearchIcon';
import BellIcon from '../assets/icons/BellIcon';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;
const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Icon = styled.View`
  width: 25px;
  height: 25px;
`;

interface Props {
  main?: boolean;
  magazine?: boolean;
}

const Header: VFC<Props> = ({main, magazine}) => {
  return (
    <>
      {main && (
        <Container>
          <IconContainer>
            <Icon>
              <Menu color={'black'} />
            </Icon>
          </IconContainer>
          <IconContainer>
            {/* eslint-disable-next-line react-native/no-inline-styles */}
            <Icon style={{width: 50, height: 50}}>
              <HeaderIcon />
            </Icon>
          </IconContainer>
        </Container>
      )}
      {magazine && (
        <Container>
          <IconContainer>
            <Icon>
              <Menu color={'#fff'} />
            </Icon>
          </IconContainer>
          <IconContainer>
            {/* eslint-disable-next-line react-native/no-inline-styles */}
            <Icon style={{marginRight: 20}}>
              <SearchIcon color={'#fff'} />
            </Icon>
            <Icon>
              <BellIcon color={'#fff'} />
            </Icon>
          </IconContainer>
        </Container>
      )}
    </>
  );
};

export default Header;
