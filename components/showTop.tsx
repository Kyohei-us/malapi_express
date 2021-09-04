import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { indexableArray, jikanTop, topBasicAnimeInfo } from "../common/types";
import useFetchTopAnime from "../hooks/useFetchTopAnime";
import AnimeImageCard from "./animeImageCard";
import SidewayMediaCard from "./sidewayMediaCard";

export default function ShowTop() {
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

  const topAsList: JSX.Element[] = topBAIlist.map((topEle2) => (
    <AnimeImageCard
      key={topEle2.title}
      image={topEle2.image}
      title={topEle2.title}
      malid={topEle2.malid}
    />
  ));
  const [isAMDindex, setIsAMDindex] = useState(0);
  const handleNextAMD = (leftOrRight: number) => {
    if (leftOrRight == 1) {
      let lastEleIndex = isAMD.length - 1;
      if (isAMDindex >= lastEleIndex) {
        setIsAMDindex(0);
      } else {
        setIsAMDindex((prevVal) => prevVal + 1);
      }
    } else if (leftOrRight == -1) {
      if (isAMDindex <= 0) {
        setIsAMDindex(isAMD.length - 1);
      } else {
        setIsAMDindex((prevVal) => prevVal - 1);
      }
    }
  };
  const isAMD: indexableArray = topBAIlist.map((ele) => (
    <SidewayMediaCard
      key={ele.malid}
      image={ele.image}
      title={ele.title}
      malid={ele.malid}
      rank={ele.rank}
      next={handleNextAMD}
    />
  ));

  const [showAll, setShowAll] = useState(false);
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? "Show 1 by 1" : "Show All"}
      </Button>
      {showAll ? topAsList : isAMD[isAMDindex]}
    </div>
  );
}
