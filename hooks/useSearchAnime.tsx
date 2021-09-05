import React, { useState, useEffect } from "react";
import axios from "axios";
import { basicAnimeInfo } from "../common/types";
import { addcorsproxy } from "../utils/cors";

/**
 * Search for anime by query
 *
 * @param query
 * @param numberToReturn
 * @returns
 */
export default function useSearchAnime(
  query: string,
  numberToReturn: number
): basicAnimeInfo[] {
  const [baiList, setBaiList] = useState<basicAnimeInfo[]>([]);

  let baseURL = `https://malapiexpress.herokuapp.com`; // https://api.jikan.moe/v3
  let url = `${baseURL}/search/anime?q=${query}&page=1`;

  useEffect(() => {
    const result = async () => {
      let response = await axios({ url: url, method: "get" });
      let tmpBaiList: basicAnimeInfo[] = [];
      for (let i = 0; i < response.data["results"].length; i++) {
        const element: any = response.data["results"][i];
        let baiEle: basicAnimeInfo = {
          image: element["image_url"],
          title: element["title"],
          malid: element["mal_id"],
        };
        tmpBaiList = [...tmpBaiList, baiEle];
      }
      tmpBaiList = tmpBaiList.slice(
        0,
        numberToReturn < tmpBaiList.length ? numberToReturn : tmpBaiList.length
      );
      setBaiList(tmpBaiList);
      console.log("anime is searched");
    };
    if (query.length >= 3) {
      result();
    } else {
      console.log("query is too short!");
    }
  }, [query]);

  return baiList;
}
