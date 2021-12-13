//^ import React from 'react';
//* ----> Imports <----
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import picPng from "../../assets/img/pic.png";
import Avatar from "@mui/material/Avatar";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    btn: {
      main: "#000000",
      contrastText: "#FFF",
    },
  },
});

export default function NavBar() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar className="appBar" color="btn" position="fixed">
        <Toolbar className="toolBar">
          {/* <Box display="grid" gridTemplateColumns="repeat(3, 1fr)"> */}
            <Box >
              <ContactPageOutlinedIcon fontSize="large" m={5} sx={{ mr: 5 }} />
            </Box>
            <Box m={5}>
              <Typography variant="h3" color="inherit" noWrap>
                Justin Odom
              </Typography>
            </Box>

            <Box m={2}>
              <Avatar
                alt="Justin Odom"
                // src={picPng}
                src="/images/pic.png"
                sx={{ width: 100, height: 100 }}
              />
            </Box>
          {/* </Box> */}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
