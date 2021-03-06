//* ----> Imports <----
import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import "./style.css"


const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    btn: {
      main: '#000000',
      contrastText: '#0FFF50',
    },
  },
});


export default function AboutMe() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: '#202124',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="#ffffff"
                gutterBottom
              >
                About Me
              </Typography>
              <Typography variant="h5" align="center" color="#F9F6EE" paragraph>
                Something short and leading about the collection below—its contents,
                the creator, etc. Make it short and sweet, but not too short so folks
                don&apos;t simply skip over it entirely.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button color = "btn" variant="contained">Main call to action</Button>
                <Button color = "btn"
                 variant="contained">Secondary action</Button>
              </Stack>
            </Container>
          </Box>
          
        </main>
       
      </ThemeProvider>
    );
  }