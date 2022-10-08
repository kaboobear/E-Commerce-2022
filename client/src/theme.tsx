import { createTheme } from '@mui/material';

const mainFont = 'Nunito, sans-serif';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: mainFont,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: '1px solid #ddd',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          margin: 0,
          boxShadow: 'none',
          borderBottom: '1px solid #ccc',
          '&:last-child': {
            borderBottom: 'none',
          },
          '&.Mui-expanded': {
            margin: 0,
            boxShadow: 'none',
          },
          '&:before': {
            display: 'none',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          marginBottom: 20,
          fontSize: 18,
          fontWeight: 600,
          marginTop: 20,
          '&.Mui-expanded': {
            marginBottom: 20,
            marginTop: 20,
          },
        },
        root: {
          padding: 0,
          minHeight: 'auto',
          '&.Mui-expanded': {
            minHeight: 'auto',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0,
          paddingBottom: 16,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 12,
          '&:last-child': {
            padding: 12,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          marginBottom: 16,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          lineHeight: 1,
          marginTop: 5,
          marginLeft: 8,
          color: '#e57373',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: 16,
        },
      },
    },
    MuiSkeleton: {
      defaultProps: {
        variant: 'rounded',
      },
      styleOverrides: {
        root: {},
      },
    },
  },
  typography: {
    fontFamily: mainFont,
    subtitle1: {
      fontSize: 24,
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: 20,
      fontWeight: 600,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    button: {
      fontSize: 14,
      fontWeight: 700,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#6495ED',
      dark: '#9995ED',
      contrastText: '#fff',
    },
    grey: {
      100: '#F8F8F8',
      200: '#DFDFDF',
      400: '#F4F6F9',
      500: '#555',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  shape: {
    borderRadius: 6,
  },
  spacing: 8,
});
