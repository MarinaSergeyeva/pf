import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // mode,
    background: {
      default: '#32322C', // dark-grey
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
    },
  },
  typography: {
    fontFamily: `'Montserrat', sans-serif`,
    fontSize: 400,
  },
});

export default theme;
