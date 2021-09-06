import React, { useState } from "react";
import { basicAnimeInfo, indexableArray } from "../../common/types";
import SidewayMediaCard from "./sidewayAnimeImageCard";

export default function SidewayMediaCardWrapper(props: {
  baiList: basicAnimeInfo[];
}) {
  const { baiList } = props;

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
  const isAMD: indexableArray = baiList.map((ele) => (
    <SidewayMediaCard key={ele.malid} bai={ele} next={handleNextAMD} />
  ));

  return isAMD[isAMDindex] ? isAMD[isAMDindex] : <></>;
}
