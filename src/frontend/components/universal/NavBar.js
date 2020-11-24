import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(1), //по умоллчанию 8px
    },
    list: {
        width: 250,
    },
}));

function NavBar(props) {
    const { items } = props;

    const classes = useStyles();

    const [state, setState] = React.useState(false);
    const toggleDrawer = (open) => {
        setState(open);
    };

    return (
        <>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                className={classes.menuButton}
                onClick={() => toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>
            <nav>
                <Drawer open={state} onClose={() => toggleDrawer(false)} variant="temporary">
                    <div className={classes.list}>
                        <List>
                            {items.map(({ title, path }, index) => (
                                <NavLink to={path} key={index}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>

                                        <ListItemText primary={title} />
                                    </ListItem>
                                </NavLink>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </nav>
        </>
    );
}

NavBar.propTypes = {
    items: PropTypes.array.isRequired,
};

export default React.memo(NavBar);
