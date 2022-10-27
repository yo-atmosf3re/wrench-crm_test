import React from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Button, Container, Grid, Paper, createTheme, ThemeProvider } from '@mui/material';
import { cyan } from '@mui/material/colors';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const Theme = createTheme({
  palette: {
    primary: cyan,
    secondary: {
      main: '#4F27BF'
    }
  }
})

function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Header />
        <Sidebar />

      </ThemeProvider>
    </div>
  );
}

export default App;
