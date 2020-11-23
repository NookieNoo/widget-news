import React from 'react';
import Header from '@app-universal/Header';
import Footer from '@app-universal/Footer';
import RecordsList from '@app-pages/index/RecordsList';
import {
    Container,
    Grid,
    Paper,
    Typography,
    Button,
    CardContent,
    Card,
    CardMedia,
    CardActions,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

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
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
    cardGrid: {
        marginTop: theme.spacing(4),
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
                                        Web Developer Blog
                                    </Typography>
                                    <Typography variant="h5" paragraph color="inherit" gutterBottom>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
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
                            Web Developer Blog
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
                                {cards.map((card) => (
                                    <Grid item key={card} xs={12} sm={6} md={4}>
                                        <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image="https://source.unsplash.com/random"
                                                title="Image title"
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <Typography variant="h5" gutterBottom>
                                                    Blog Post
                                                </Typography>
                                                <Typography>
                                                    Blog Post. Web Developer blog Web Developer blog
                                                    Web Developer blog
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small" color="primary">
                                                    View
                                                </Button>
                                                <Button size="small" color="primary">
                                                    Edit
                                                </Button>
                                                <LayerIcon />
                                                <PlayCircleFilledIcon />
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </Container>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
