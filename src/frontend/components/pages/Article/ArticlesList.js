import React from 'react';
import ArticleCard from './includes/ArticleCard';
import { getArticlesList } from '@app-actions';

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
        padding: theme.spacing(6),
        marginTop: theme.spacing(8),
    },
    cardGrid: {
        marginTop: theme.spacing(4),
    },
}));

function ArticlesList(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        items: [],
        isDataLoaded: false,
    });

    const successCallback = (response) => {
        setState((pr) => {
            return { ...pr, items: response.data, isDataLoaded: true };
        });
    };

    React.useEffect(() => {
        getArticlesList(successCallback);
    }, []);

    return state.isDataLoaded ? (
        <main>
            <Paper
                className={classes.mainFeaturesPost}
                style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}
            >
                <Container fixed>
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
                                    Widget News
                                </Typography>
                                <Typography variant="h5" paragraph color="inherit" gutterBottom>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                                <Button variant="contained" color="secondary">
                                    Learn more
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
            <div className={classes.mainContent}>
                <Container maxWidth="md">
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        Widget News
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        paragraph
                        gutterBottom
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    <div className={classes.mainButtons}>
                        <Grid container spacing={5} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    Start Now
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Learn more
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            {state.items
                                ? state.items.map((i) => {
                                      return <ArticleCard key={i.id} data={i} />;
                                  })
                                : null}
                        </Grid>
                    </Container>
                </Container>
            </div>
        </main>
    ) : null;
}

export default ArticlesList;
