import { Button, IconButton, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { useDispatch } from "react-redux";
import { basicAnimeInfo } from "../../common/types";
import { showSingleDetail } from "../../store/action/showSingleDetail";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 400,
      width: 300,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    mirror: {
      transform: "rotate(180deg)",
    },
  })
);

export default function AnimeImageCard(props: {
  bai: basicAnimeInfo;
  next?: Function;
}) {
  const { bai, next } = props;
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={bai.image}
        title={bai.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {bai.title}
        </Typography>
      </CardContent>
      <div className={classes.controls}>
        {next ? (
          <>
            <IconButton aria-label="previous" onClick={() => next(-1)}>
              <NavigateNextIcon className={classes.mirror} />
            </IconButton>
            <IconButton aria-label="next" onClick={() => next(1)}>
              <NavigateNextIcon />
            </IconButton>
          </>
        ) : (
          <></>
        )}
      </div>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(showSingleDetail(bai.malid))}
        >
          Show More Detail
        </Button>
      </CardActions>
    </Card>
  );
}
