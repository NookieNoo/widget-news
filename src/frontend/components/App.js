import React from 'react';
import Header from '@app-universal/Header';
import Footer from '@app-universal/Footer';
import RecordsList from '@app-pages/index/RecordsList';

import { Container, AppBar, Toolbar, IconButton, Typography, Button, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';

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

function App(props) {
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

export default App;
