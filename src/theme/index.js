import { createMuiTheme } from '@material-ui/core/styles';

export const isDark = () => true; // userPrefersDark();

const theme = createMuiTheme({
  palette: {
    type: isDark() ? 'dark' : 'light',
    primary: {
      light: '#E3F2FD',
      main: '#2196F3',
      dark: '#1565C0',
      contrastText: '#fff',
      bright: '#5CBFFD',
    },
    secondary: {
      light: '#00BFA5',
      main: '#00BFA5',
      dark: '#00796B',
      contrastText: '#fff',
      bright: '#7FDED1',
    },
    background: {
      default: isDark() ? '#212121' : '#F9F9F9',
      paper: isDark() ? '#2B2B2B' : '#fff',
    },
    text: isDark() ? {
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
      primary: '#fff',

      secondary: 'rgba(255, 255, 255, 0.7)',
    } : {
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
    },
    logo: {
      green: '#50b548',
      red: '#ef5645',
      blue: '#419dcb',
      orange: '#f79e2d',
      pink: '#f76e62',
    },
  },
  invertedBackgroundColor: isDark() ? '#FFF' : '#2B2B2B',
  invertedColor: isDark() ? '#000' : '#fff',
  borderColor: isDark() ? '#F9F9F9' : '#212121',
  buttonBackgroundColor: '#2289BB',
  buttonBackgroundColorHover: '#0774A9',
  secondButtonBackgroundColor: '#359E2A',
  secondBackgroundColorHover: '#1E8014',
  typography: {
    useNextVariants: true,
    fontFamily: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
    fontSize: 14,
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    htmlFontSize: 16,
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
});

export default theme;
