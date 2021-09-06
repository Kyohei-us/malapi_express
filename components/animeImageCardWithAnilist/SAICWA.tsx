import { Button, IconButton } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React, { useState } from "react";
import { AnimeInfoWA } from "../../common/types";
import DescriptionDialog from "../descriptionDialog";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "300px",
      maxWidth: "500px",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: "200px",
      maxWidth: "300px",
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    mirror: {
      transform: "rotate(180deg)",
    },
  })
);

// Sideway Anime Image Card With Anilist
export default function SAICWA(props: { bai: AnimeInfoWA; next: Function }) {
  const { bai, next } = props;
  const classes = useStyles();
  const [detailOpen, setDetailOpen] = useState(false);
  const closeDetail = () => {
    setDetailOpen(false);
  };

  return (
    <>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {bai.title.native ? bai.title.native : bai.title.english}
            </Typography>
            {/* <ReadMoreSynopsis paragraph={bai.description} readMore={detailOpen} /> */}
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="previous" onClick={() => next(-1)}>
              <NavigateNextIcon className={classes.mirror} />
            </IconButton>
            <IconButton aria-label="next" onClick={() => next(1)}>
              <NavigateNextIcon />
            </IconButton>
            <Button
              size="small"
              color="primary"
              onClick={() => setDetailOpen(!detailOpen)}
            >
              Show More Detail
            </Button>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image={
            bai.coverImage.large
              ? bai.coverImage.large
              : "../../public/images/image-not-found.png"
          }
          title="Live from space album cover"
        />
      </Card>
      <DescriptionDialog
        closeDetail={() => closeDetail()}
        detailOpen={detailOpen}
        bai={bai}
      />
    </>
  );
}
