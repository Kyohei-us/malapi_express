import {
  Backdrop,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailAnimeInfo } from "../common/types";
import useFetchAnimeInfo from "../hooks/useFetchAnimeInfo";
import { RootState } from "../store";
import {
  openTrailerOverlay,
  singleDetailInfo,
} from "../store/action/singleDetailInfo";
import { getYoutubeVideoID } from "../utils/youtubeURLtoEmbed";
import AnimeSingleDetail from "./animeSingleDetail";
import SearchAnimeWithMAL from "./searchAnimeWithMAL";
import ShowTop from "./showTop";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      textAlign: "center",
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    trailerCard: {
      width: 500,
    },
    trailerMedia: {
      height: 500,
    },
  })
);

export default function SearchOrDetail() {
  const classes = useStyles();

  // read state from redux
  const showSingleDetailState = useSelector(
    (state: RootState) => state.showSingleDetail
  );

  const dai = useSelector((state: RootState) => state.singleDetailInfo);

  // get detailAnimeInfo from custom hooks
  const detailAnimeInfo: detailAnimeInfo = useFetchAnimeInfo(
    showSingleDetailState.malidForDetail
  );

  // declare dispatch function
  const dispatch = useDispatch();

  // render trail only if its url is fetched and watch trailer is clicked
  const trailer =
    getYoutubeVideoID(dai.singleDetailInfo.trailer_url) &&
    dai.openTrailerOverlay ? (
      <Card className={classes.trailerCard}>
        <CardActionArea>
          <CardMedia
            component="iframe"
            src={`${dai.singleDetailInfo.trailer_url}`}
            className={classes.trailerMedia}
          />
        </CardActionArea>
        <CardContent></CardContent>
        <CardActions></CardActions>
      </Card>
    ) : (
      <></>
    );

  // show detail for singlee work (anime, manga)
  const singleDetail = (
    <>
      <AnimeSingleDetail dai={dai.singleDetailInfo} />
      <Backdrop
        open={dai.openTrailerOverlay}
        className={classes.backdrop}
        onClick={() => dispatch(openTrailerOverlay())}
      >
        {trailer}
      </Backdrop>
    </>
  );

  return (
    <div className={classes.root}>
      {showSingleDetailState.showSingleDetail ? (
        singleDetail
      ) : (
        <>
          <ShowTop />
          <SearchAnimeWithMAL numberForResults={10} />
        </>
      )}
    </div>
  );
}
