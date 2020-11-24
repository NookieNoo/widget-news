import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

export default function Panel() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (open) => {
        setState({ ...state, left: open });
    };

    return (
        <>
            <div>
                <Button onClick={toggleDrawer(true)}>left</Button>
                <Drawer anchor="left" open={state.left} onClose={toggleDrawer(false)}>
                    <div>sdf</div>
                    <div>sdf</div>
                    <div>sdf</div>
                    <div>sdf</div>
                </Drawer>
            </div>
        </>
    );
}
