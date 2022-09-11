import { createTheme } from "@mui/material";

const mainFont = "Montserrat, sans-serif";

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
          boxShadow: "none",
          border: "1px solid #ddd",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "12px",
          "&:last-child": {
            padding: "12px",
          },
        },
      },
    },
    MuiSkeleton: {
      defaultProps: {
        variant: "rounded",
      },
      styleOverrides: {
        root: {},
      },
    },
  },
  typography: {
    fontFamily: mainFont,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#6495ED",
      dark: "#9995ED",
      contrastText: "#fff",
    },
    grey: {
      100: "#F8F8F8",
      200: "#DFDFDF",
      400: "#F4F6F9",
      500: "#555",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
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
