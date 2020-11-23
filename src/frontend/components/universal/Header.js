import React from 'react';
import logo from '@images/logo.jpg';

import { Container, AppBar, Toolbar, IconButton, Typography, Button, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1), //по умоллчанию 8px
    },
    title: {
        flexGrow: 1,
    },
}));

function Header(props) {
    const classes = useStyles();
    return (
        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title}>Widget News</Typography>
                    <Box mr={3}>
                        <Button color="inherit" variant="outlined">
                            Log in
                        </Button>
                    </Box>
                    <Button color="secondary" variant="contained">
                        Sign Up
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
