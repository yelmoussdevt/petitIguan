"use client"
import { createTheme } from '@mui/material/styles';

// Créez un thème personnalisé
// #004731 - Vert foncé
// #007B55 - Vert
// #A3D6B7 - Vert clair
// #B2D9B2 - Vert plus clair
// #52B68D - Vert turquoise
const theme = createTheme({
  palette: {
    primary: {
      main: '#007B55', // Couleur principale
    },
    secondary: {
      main: '#B2D9B2', // Couleur secondaire
    },
    background: {
      default: '#52B68D', // Couleur de fond par défaut
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Police par défaut
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Bordure arrondie pour les boutons
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0,0,0,0.7)', // Couleur de fond personnalisée pour AppBar
        },
      },
    },
  },
});

export default theme;