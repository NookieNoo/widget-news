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
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Panel from './Panel';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(1), //по умоллчанию 8px
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
}));

function Header(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [state, setState] = React.useState(false);
    const toggleDrawer = (open) => {
        setState(open);
    };

    return (
        <>
            <AppBar position="fixed">
                <Container fixed>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            className={classes.menuButton}
                            onClick={() => toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>

                        <nav className={classes.drawer}>
                            <Drawer
                                open={state}
                                onClose={() => toggleDrawer(false)}
                                variant="temporary"
                            >
                                <div className={classes.list}>
                                    <List>
                                        {['Статьи', 'Категории', 'Подкатегории', 'Еще'].map(
                                            (text, index) => (
                                                <ListItem button key={text}>
                                                    <ListItemIcon>
                                                        {index % 2 === 0 ? (
                                                            <InboxIcon />
                                                        ) : (
                                                            <MailIcon />
                                                        )}
                                                    </ListItemIcon>
                                                    <ListItemText primary={text} />
                                                </ListItem>
                                            )
                                        )}
                                    </List>
                                </div>
                            </Drawer>
                        </nav>

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
