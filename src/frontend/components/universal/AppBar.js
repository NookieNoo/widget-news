import React from 'react';

import {
    Container,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    TextField,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(1), //по умоллчанию 8px
    },
    title: {
        flexGrow: 1,
    },
}));

function AppBar(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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
                        <Button color="inherit" variant="outlined" onClick={handleClickOpen}>
                            Log in
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                            <DialogContent>
                                <DialogContentText>Log in to see videos</DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Email"
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    id="pass"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleClose} color="primary">
                                    Log in
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                    <Button color="secondary" variant="contained">
                        Sign Up
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default AppBar;
