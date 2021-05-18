import React, {FC} from 'react';
import {ThemeProvider} from '@emotion/react';
import {theme} from '../theme';
import styled from '@emotion/native';
import {StatusBar} from 'react-native';

const NoChiContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
const Container = styled.View`
  flex: 1;
`;

interface Props {
  notchNone?: boolean;
}

const Layout: FC<Props> = ({children, notchNone}) => {
  return (
    <>
      {notchNone ? (
        <ThemeProvider theme={theme}>
          <Container>
            <StatusBar />
            {children}
          </Container>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <NoChiContainer>
            <StatusBar />
            {children}
          </NoChiContainer>
        </ThemeProvider>
      )}
    </>
  );
};

export default Layout;
