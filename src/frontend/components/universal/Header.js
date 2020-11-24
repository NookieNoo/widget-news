import React from 'react';
import {
    Container,
    AppBar,
    Toolbar,
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
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));

const menuItems = [
    {title: 'Статьи', path: '/article/list'},
    {title: 'Категории', path: '/category/list'},
    {title: 'Подкатегории', path: '/category/list'},
    {title: 'Пользователи', path: '/user/list'},
    {title: 'Еще', path: '/user/list'},
]

function Header(props) {
    const classes = useStyles();
    console.count('route');

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar position="fixed">
                <Container fixed>
                    <Toolbar>
                        <NavBar items={menuItems} />

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
        </>
    );
}

export default Header;
