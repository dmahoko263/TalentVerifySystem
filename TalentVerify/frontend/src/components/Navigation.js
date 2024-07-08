import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Navigation() {
    return (
        <AppBar position="fixed"sx={{ zIndex: 5 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    TalentVerify App
                </Typography>
                <Button color="inherit" component={RouterLink} to="/">
                    Home
                </Button>
                <Button color="inherit" component={RouterLink} to="/upload">
                    Bulk Uploads
                </Button>
                <Button color="inherit" component={RouterLink} to="/elist">
                    Employee List
                </Button>
                <Button color="inherit" component={RouterLink} to="/employees/add">
                    Add Employee
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navigation;
