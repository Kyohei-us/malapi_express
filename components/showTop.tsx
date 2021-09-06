import { Box, Button, Theme, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { jikanTop, topBasicAnimeInfo } from "../common/types";
import useFetchTopAnime from "../hooks/useFetchTopAnime";
import AnimeImageCardWrapper from "./animeImageCard/animeImageCardWrapper";
import SidewayMediaCardWrapper from "./animeImageCard/sidewayAnimeImageCardWrapper";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: "90vw",
    },
    rowFlex: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
  })
);

export default function ShowTop() {
  const classes = useStyles();

  const topPopAnime: jikanTop = {
    type: "anime",
    page: 1,
    subtype: "bypopularity",
  };
  const topRes = useFetchTopAnime(topPopAnime);

  const trl: any[] = topRes?.data.top;
  const topBAIlist: topBasicAnimeInfo[] = trl
    ? trl
        .map((topEle: any) => {
          let topEle2: topBasicAnimeInfo = {
            image: topEle.image_url,
            title: topEle.title,
            malid: topEle.mal_id,
            rank: topEle.rank,
          };
          return topEle2;
        })
        .filter((topEle) => topEle.rank <= 20)
    : [];

  const [showAll, setShowAll] = useState(false);
  return (
    <Box className={classes.root}>
      <Box className={classes.rowFlex} m={2}>
        <Box m={2}>
          <Typography variant="h4">Top Anime</Typography>
        </Box>
        <Box m={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Sideway" : "Vertical"}
          </Button>
        </Box>
      </Box>
      <Box m={2}>
        {showAll ? (
          <AnimeImageCardWrapper baiList={topBAIlist} />
        ) : (
          <SidewayMediaCardWrapper baiList={topBAIlist} />
        )}
      </Box>
    </Box>
  );
}
