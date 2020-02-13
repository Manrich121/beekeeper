import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand'
  },
  palette: {
    text: {
      hint: '#FFFFFF'
    },
    primary: {
      main: '#FFD039'
    },
    secondary: {
      main: '#F9EFD4'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  }
});

export default theme;
