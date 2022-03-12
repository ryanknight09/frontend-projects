import { FC, ReactNode } from 'react';

import { ThemeProvider, createTheme } from '@mui/material';

export interface ThemeProps {
  children?: ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#52FFA8',
      main: '#031E26'
    },
    neutral: {
      light: '#4E5D73',
      main: '#323A49',
      dark: '#1F2632'
    }
  },
  typography: {
    fontFamily: ['Manrope', 'sans-serif'].join(','),
    fontWeightBold: 800,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    fontWeightLight: 200,
    fontSize: 28
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
});

const Theme: FC<ThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// declare module '@mui/material/styles' {
//   interface BreakpointOverrides {
//     xs: false;
//     sm: false;
//     md: false;
//     lg: false;
//     xl: false;
//     mobile: true;
//     tablet: false;
//     laptop: false;
//     desktop: true;
//   }
// }
