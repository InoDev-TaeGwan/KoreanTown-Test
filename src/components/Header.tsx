import React, {VFC} from 'react';
import styled from '@emotion/native';
import HeaderIcon from '../assets/icons/HeaderIcon';
import Menu from '../assets/icons/Menu';
import SearchIcon from '../assets/icons/SearchIcon';
import BellIcon from '../assets/icons/BellIcon';
import Dropdown from './Dropdown';
import UserProfileImage from './UserProfileImage';
import profile from '../assets/images/taeyeon.jpg';

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
  sns?: boolean;
}

const Header: VFC<Props> = ({main, magazine, sns}) => {
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
            {/*<Icon style={{width: 50, height: 50}}>*/}
            {/*  <HeaderIcon />*/}
            {/*</Icon>*/}
            <UserProfileImage
              width={50}
              height={50}
              source={require('../assets/images/taeyeon.jpg')}
              borderRadius={25}
            />
          </IconContainer>
        </Container>
      )}
      {magazine && (
        <Container>
          <IconContainer>
            <Icon>
              <Menu color={'#fff'} />
            </Icon>
            <Dropdown color={'#fff'} />
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
      {sns && (
        <Container>
          <IconContainer>
            <Icon>
              <Menu color={'black'} />
            </Icon>
            <Dropdown color={'black'} />
          </IconContainer>
          <IconContainer>
            {/* eslint-disable-next-line react-native/no-inline-styles */}
            <Icon style={{marginRight: 20}}>
              <SearchIcon color={'black'} />
            </Icon>
            <Icon>
              <BellIcon color={'black'} />
            </Icon>
          </IconContainer>
        </Container>
      )}
    </>
  );
};

export default Header;
