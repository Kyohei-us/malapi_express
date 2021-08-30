import { useState } from 'react';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useFetchAnimeInfo from '../hooks/useFetchAnimeInfo';
import AnimeDetails from './animeDetails';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 400,
        width: 300
    },
});

export default function AnimeImageCard(props: {
    image: string;
    title: string;
    malid: number;
    showAnimeDetails: boolean;
    onClickShowDetails: Function;
    readMoreSynopsis: boolean;
    handleReadMore: Function;
}) {
    const { image, title, malid, showAnimeDetails, onClickShowDetails, readMoreSynopsis, handleReadMore } = props
    const classes = useStyles();

    const animeRes = useFetchAnimeInfo(malid);

    return (
        <Card className={classes.root} >
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={title} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    {
                        showAnimeDetails ?
                            <Typography gutterBottom variant="h5" component="h4">
                                <AnimeDetails animeRes={animeRes} readMoreSynopsis={readMoreSynopsis} />
                            </Typography> :
                            <></>
                    }

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => onClickShowDetails()}>
                    {showAnimeDetails ? "Collapse details" : "Show details"}
                </Button>
                {
                    showAnimeDetails ?
                        <Button color="secondary" onClick={() => {handleReadMore()}} >
                            {readMoreSynopsis ? "Collapse synopsis" : "Read More"}
                        </Button> :
                        <></>
                }

            </CardActions>
        </Card>
    )
}