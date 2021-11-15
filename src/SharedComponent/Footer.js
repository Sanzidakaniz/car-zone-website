import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
            To Get Nice Car,Stay Connected With Us.
            </Typography>
            <br/>
            <Typography variant="body1" color="inherit">
              © 2021 CarZone
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Footer;