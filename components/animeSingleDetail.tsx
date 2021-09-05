import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import { detailAnimeInfo } from "../common/types";
import {
  openTrailerOverlay,
  resetDAI,
  showSingleDetail,
  singleDetailInfo,
} from "../store/actions";
import { getYoutubeVideoID } from "../utils/youtubeURLtoEmbed";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  media: {
    height: 500,
  },
});

export default function AnimeSingleDetail(props: { dai: detailAnimeInfo }) {
  const classes = useStyles();
  const { dai } = props;
  const dispatch = useDispatch();

  const cm = getYoutubeVideoID(dai.trailer_url) ? (
    <CardMedia
      component="img"
      src={`https://img.youtube.com/vi/${getYoutubeVideoID(
        dai.trailer_url
      )}/0.jpg`}
      className={classes.media}
    />
  ) : (
    <></>
  );

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          {cm}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {dai.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {dai.title_japanese}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(openTrailerOverlay())}
          >
            Watch Trailer
          </Button>
          <Button
            size="small"
            color="secondary"
            onClick={() => {
              dispatch(showSingleDetail(-1));
              dispatch(resetDAI());
            }}
          >
            Go Back
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
