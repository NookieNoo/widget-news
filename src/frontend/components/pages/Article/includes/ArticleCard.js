import React from 'react';
import format from 'date-fns/format';
import PropTypes from 'prop-types';

import {
    Grid,
    Typography,
    Button,
    CardContent,
    Card,
    CardMedia,
    CardActions,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}));

function ArticleCard(props) {
    const { id, category, subcategory, publicationDate, content, summary, title } = props.data;
    const classes = useStyles();
    console.log('props.data', props.data);

    return (
        <Grid item key={id} xs={12} sm={6} md={6} lg={6}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {title}
                    </Typography>
                    <Typography>{summary}</Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                    <div>
                        <Button size="small" color="primary">
                            View
                        </Button>
                        <Button size="small" color="primary">
                            Edit
                        </Button>
                    </div>

                    <div>{format(new Date(publicationDate), 'dd.MM.yyyy')}</div>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default ArticleCard;

ArticleCard.propTypes = {
    data: PropTypes.object.isRequired,
};
