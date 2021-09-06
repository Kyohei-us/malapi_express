import React, { useState } from "react";
import { AnimeInfoWA, indexableArray } from "../../common/types";
import SAICWA from "./SAICWA";

export default function SAICWAwrapper(props: { baiList: AnimeInfoWA[] }) {
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
    <SAICWA key={ele.id} bai={ele} next={handleNextAMD} />
  ));

  return isAMD[isAMDindex] ? isAMD[isAMDindex] : <></>;
}
