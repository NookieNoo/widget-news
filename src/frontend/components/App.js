import React from 'react';
import Header from '@app-universal/Header';
import Footer from '@app-universal/Footer';
import RecordsList from '@app-pages/index/RecordsList';
import { Container, Grid, Paper, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainFeaturesPost: {
        position: 'relative',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundOverlay: 'rgba(0, 0, 0, 0.3)',
    },
    mainFeaturesPostContent: {
        position: 'relative',
        padding: theme.spacing(9),
    },
}));
function App(props) {
    const classes = useStyles();
    return (
        <>
            <Header />
            <main>
                <Paper
                    className={classes.mainFeaturesPost}
                    style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}
                >
                    <Container maxWidth="lg">
                        <Grid container>
                            <div className={classes.overlay} />
                            <Grid item md={6}>
                                <div className={classes.mainFeaturesPostContent}>
                                    <Typography
                                        component="h1"
                                        variant="h3"
                                        color="inherit"
                                        gutterBottom
                                    >
                                        Web Developer Blog
                                    </Typography>
                                    <Typography variant="h5" paragraph color="inherit" gutterBottom>
                                        Lorem ipsum dolor sit amet, c
                                    </Typography>
                                    <Button variant="contained" color="secondary">
                                        Learn more
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </main>
        </>
    );
}

export default App;
