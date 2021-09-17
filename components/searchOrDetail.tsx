import {
  Backdrop,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailAnimeInfo } from "../common/types";
import useFetchAnimeInfo from "../hooks/useFetchAnimeInfo";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { RootState } from "../store";
import { openTrailerOverlay } from "../store/action/singleDetailInfo";
import { getYoutubeVideoID } from "../utils/youtubeURLtoEmbed";
import AnimeSingleDetail from "./animeSingleDetail";
import SearchAnimeWithAnilist from "./searchAnimeWithAnilist";
import ShowTop from "./showTop";

export default function SearchOrDetail() {
  // read state from redux
  const showSingleDetailState = useSelector(
    (state: RootState) => state.showSingleDetail
  );

  const dai = useSelector((state: RootState) => state.singleDetailInfo);

  const searchByQueryState = useSelector(
    (state: RootState) => state.searchByQuery
  );

  // get detailAnimeInfo from custom hooks
  const detailAnimeInfo: detailAnimeInfo = useFetchAnimeInfo(
    showSingleDetailState.malidForDetail
  );

  // declare dispatch function
  const dispatch = useDispatch();

  const isPageWide = useMediaQuery(`(min-width:426px)`);

  // render trail only if its url is fetched and watch trailer is clicked
  const trailer =
    getYoutubeVideoID(dai.singleDetailInfo.trailer_url) &&
    dai.openTrailerOverlay ? (
      <Card>
        <CardActionArea>
          <CardMedia
            component="iframe"
            src={`${dai.singleDetailInfo.trailer_url}`}
          />
        </CardActionArea>
        <CardContent></CardContent>
        <CardActions></CardActions>
      </Card>
    ) : (
      <></>
    );

  // show detail for single work (anime, manga)
  const singleDetail = (
    <Box width="90%">
      <AnimeSingleDetail dai={dai.singleDetailInfo} />
      <Backdrop
        open={dai.openTrailerOverlay}
        onClick={() => dispatch(openTrailerOverlay())}
      >
        {trailer}
      </Backdrop>
    </Box>
  );

  // render main part by media query and anime search query
  const renderMain = showSingleDetailState.showSingleDetail ? (
    singleDetail
  ) : isPageWide ? (
    searchByQueryState.query ? (
      <>
        <SearchAnimeWithAnilist />
      </>
    ) : (
      <>
        <ShowTop />
      </>
    )
  ) : searchByQueryState.query ? (
    <>
      <SearchAnimeWithAnilist withTextField={true} />
    </>
  ) : (
    <>
      <SearchAnimeWithAnilist withTextField={true} />
      <ShowTop />
    </>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {renderMain}
    </Box>
  );
}
