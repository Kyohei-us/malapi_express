import { useDispatch } from "react-redux";
import { detailAnimeInfo } from "../common/types";
import { showSingleDetail } from "../store/action/showSingleDetail";
import { openTrailerOverlay, resetDAI } from "../store/action/singleDetailInfo";
import { getYoutubeVideoID } from "../utils/youtubeURLtoEmbed";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export default function AnimeSingleDetail(props: { dai: detailAnimeInfo }) {
  const { dai } = props;
  const dispatch = useDispatch();

  const cm = getYoutubeVideoID(dai.trailer_url) ? (
    <CardMedia
      component="img"
      src={`https://img.youtube.com/vi/${getYoutubeVideoID(
        dai.trailer_url
      )}/0.jpg`}
    />
  ) : (
    <></>
  );

  return (
    <>
      <Card>
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
