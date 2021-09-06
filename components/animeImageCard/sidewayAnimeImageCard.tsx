import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React from "react";
import { useDispatch } from "react-redux";
import { basicAnimeInfo } from "../../common/types";
import { showSingleDetail } from "../../store/action/showSingleDetail";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "200px",
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
      width: 151,
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

export default function SidewayMediaCard(props: {
  bai: basicAnimeInfo;
  next: Function;
}) {
  const { bai, next } = props;
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {bai.title}
          </Typography>
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
            onClick={() => dispatch(showSingleDetail(bai.malid))}
          >
            Show More Detail
          </Button>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={bai.image}
        title="Live from space album cover"
      />
    </Card>
  );
}
