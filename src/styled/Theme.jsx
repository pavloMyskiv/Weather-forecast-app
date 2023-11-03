import React from 'react';
import { ThemeProvider } from 'styled-components';

const darkTheme = {
  colors: {
    text: {
      major: '#f0f0f2',
      minor: '#a6a6a6',
    },
    background: {
      app: '#454e5b',
      major: '#0b131e',
      minor: '#80808060',
      button_blue: '#0095FF',
      button_red: '#ff0000',
    },
    error: '#ff0000',
  },
  fontSize: {
    s: '0.8em',
    m: '1em',
    l: '1.2em',
    xl: '1.4em',
    xxl: '2em',
  },
  border: '3px solid #80808060',
};

const whiteTheme = {
  colors: {
    text: {
      major: '#202B3B',
      minor: '#202b3ba4',
    },
    background: {
      app: '#2EA3F6',
      major: '#c5ebff',
      minor: '#80808059',
      button_blue: '#0095FF',
      button_red: '#ff0000',
    },
    error: '#ff0000',
  },
  fontSize: {
    s: '0.8em',
    m: '1em',
    l: '1.2em',
    xl: '1.4em',
    xxl: '2em',
  },
  border: '3px solid #80808060',
};

const Theme = ({ children, mode }) => {
  return (
    <ThemeProvider theme={mode ? darkTheme : whiteTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
