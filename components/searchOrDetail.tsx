import {
  Backdrop,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailAnimeInfo } from "../common/types";
import useFetchAnimeInfo from "../hooks/useFetchAnimeInfo";
import { RootState } from "../store";
import { openTrailerOverlay, singleDetailInfo } from "../store/actions";
import { getYoutubeVideoID } from "../utils/youtubeURLtoEmbed";
import AnimeSingleDetail from "./animeSingleDetail";
import SearchAnimeWithMAL from "./searchAnimeWithMAL";
import ShowTop from "./showTop";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    root: {
      width: 500,
    },
    media: {
      height: 500,
    },
  })
);

export default function SearchOrDetail() {
  const classes = useStyles();
  const showSingleDetailState = useSelector(
    (state: RootState) => state.showSingleDetail
  );

  const dai = useSelector((state: RootState) => state.singleDetailInfo);

  const detailAnimeInfo: detailAnimeInfo = useFetchAnimeInfo(
    showSingleDetailState.malidForDetail
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleDetailInfo(detailAnimeInfo));
  }, [detailAnimeInfo.title_japanese]);

  const cm =
    getYoutubeVideoID(dai.singleDetailInfo.trailer_url) &&
    dai.openTrailerOverlay ? (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="iframe"
            src={`${dai.singleDetailInfo.trailer_url}`}
            className={classes.media}
          />
        </CardActionArea>
        <CardContent></CardContent>
        <CardActions></CardActions>
      </Card>
    ) : (
      <></>
    );

  const singleDetail = (
    <>
      <AnimeSingleDetail dai={dai.singleDetailInfo} />
      <Backdrop
        open={dai.openTrailerOverlay}
        className={classes.backdrop}
        onClick={() => dispatch(openTrailerOverlay())}
      >
        {cm}
      </Backdrop>
    </>
  );

  return (
    <>
      {showSingleDetailState.showSingleDetail ? (
        singleDetail
      ) : (
        <>
          <ShowTop />
          <SearchAnimeWithMAL numberForResults={10} />
        </>
      )}
    </>
  );
}
