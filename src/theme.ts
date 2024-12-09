// src/theme.ts
import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light", // Can be 'dark'
    primary: {
      main: "#1976d2",
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#9c27b0",
      light: "#d05ce3",
      dark: "#6a0080",
      contrastText: "#ffffff",
    },
    error: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#ffa726",
      light: "#ffb74d",
      dark: "#f57c00",
      contrastText: "#ffffff",
    },
    info: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2",
      contrastText: "#ffffff",
    },
    success: {
      main: "#4caf50",
      light: "#81c784",
      dark: "#388e3c",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
      disabled: "#9e9e9e",
    },
    divider: "rgba(0, 0, 0, 0.12)",
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif, MyCustomFont",
    h1: { fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.2 },
    h2: { fontSize: "2rem", fontWeight: 600, lineHeight: 1.3 },
    h3: { fontSize: "1.75rem", fontWeight: 600, lineHeight: 1.4 },
    h4: { fontSize: "1.5rem", fontWeight: 500, lineHeight: 1.5 },
    h5: { fontSize: "1.25rem", fontWeight: 500, lineHeight: 1.6 },
    h6: { fontSize: "1rem", fontWeight: 500, lineHeight: 1.7 },
    subtitle1: { fontSize: "1rem", fontWeight: 400 },
    subtitle2: { fontSize: "0.875rem", fontWeight: 500 },
    body1: { fontSize: "1rem", fontWeight: 400 },
    body2: { fontSize: "0.875rem", fontWeight: 400 },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      textTransform: "uppercase",
    },
    caption: { fontSize: "0.75rem", fontWeight: 400 },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 400,
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 8, // Global border radius for components like buttons, cards, etc.
  },
  spacing: 8, // Base spacing unit, can be multiplied (e.g., theme.spacing(2) for 16px)
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      standard: 300,
      complex: 375,
    },
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true, // Disable ripple effect for all buttons
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          padding: "8px 16px",
        },
        containedPrimary: {
          color: "#fff",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundColor: "#1976d2",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 16,
        },
        elevation1: {
          boxShadow:
            "0px 1px 3px rgba(0,0,0,0.12), 0px 1px 1px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.2)",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#333",
        },
        h2: {
          color: "#555",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#f5f5f5",
          color: "#212121",
          fontFamily: "Roboto, Arial, sans-serif",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#f9f9f9", // Light grey for subtle elegance
          borderRadius: "8px", // Rounded corners for modern design
          transition: "all 0.3s ease-in-out", // Smooth transition for hover effects
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Light shadow for depth
          "&:hover": {
            backgroundColor: "#f0f0f0", // Slightly darker grey on hover
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)", // Enhance shadow on hover
          },
          "& .MuiInputBase-root": {
            borderRadius: "8px", // Match input radius with the container
            color: "#333", // Text color for readability
          },
          "& .MuiInputBase-input": {
            padding: "12px", // Comfortable spacing inside the input
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #ccc", // Subtle border
            transition: "border-color 0.3s ease-in-out", // Smooth border color change
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#007BFF", // Border color on hover (blue in this case)
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#007BFF", // Border color on focus
            boxShadow: "0 0 0 3px rgba(0, 123, 255, 0.2)", // Glow effect
          },
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
