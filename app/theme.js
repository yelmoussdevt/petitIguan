"use client";
import { createTheme } from '@mui/material/styles';

// Créez un thème personnalisé avec les couleurs fournies
const theme = createTheme({
  palette: {
    primary: {
      main: '#007B55', // Couleur principale
      dark: '#004731', // Vert foncé
      light: '#A3D6B7', // Vert clair
    },
    secondary: {
      main: '#B2D9B2', // Couleur secondaire
      contrastText: '#004731', // Texte contrasté avec la couleur secondaire
    },
    background: {
      default: '#52B68D', // Couleur de fond par défaut
      paper: '#A3D6B7', // Couleur de fond pour le papier (par ex. les cartes)
    },
    customColors: {
      darkGreen: '#004731',   // Vert foncé
      green: '#007B55',       // Vert
      lightGreen: '#A3D6B7',  // Vert clair
      lighterGreen: '#B2D9B2', // Vert plus clair
      turquoise: '#52B68D',   // Vert turquoise
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', // Police par défaut
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
      lineHeight: 1.5, // Amélioration de la lisibilité
    },
    button: {
      textTransform: 'none', // Enlever la majuscule par défaut des boutons
      fontWeight: 600,       // Poids du texte
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // borderRadius: '8px', // Bordure arrondie pour les boutons
          color: '#004731',    // Texte en vert foncé par défaut
         
          '&:hover': {
            backgroundColor: '#007B55', // Couleur de fond au survol
          },
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
