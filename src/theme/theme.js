import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // mode,
    background: {
      default: '#141414', // dark-grey
      light: '#424241', // light-grey
    },
    primary: {
      main: '#36F1CD', // light-turquoise
      dark: '#13C4A3', // dark-turquoies
    },
    secondary: {
      main: '#39A0ED', // light-blue
      dark: '#4C6085', // dark-blue
    },
    text: {
      primary: '#FFFFFF', // white
      secondary: '#000000', // black
      lightPrimary: '#BBBBBB',
    },
  },
  typography: {
    fontFamily: `'Montserrat', sans-serif`,
    fontWeight: {
      light: 300,
      regular: 400,
      semiBold: 600,
      bold: 700,
      black: 900,
    },
    fontStyle: {
      italic: 'italic',
    },
  },
});

export default theme;
