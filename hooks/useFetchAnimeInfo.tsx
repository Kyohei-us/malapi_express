import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { detailAnimeInfo } from "../common/types";
import { useDispatch } from "react-redux";
import { singleDetailInfo } from "../store/action/singleDetailInfo";

/**
 * Fetch detailed anime info
 *
 * @param malid
 * @returns
 */
export default function useFetchAnimeInfo(malid: number): detailAnimeInfo {
  const [dai, setDai] = useState<detailAnimeInfo>({
    title_japanese: "",
    trailer_url: "",
    synopsis: "",
    genres: [],
    image: "",
    title: "",
    malid: -1,
  });

  let baseURL = `https://malapiexpress.herokuapp.com`; // https://api.jikan.moe/v3
  let url = `${baseURL}/anime/${malid}`;
  // How I fixed CORS issue with this api
  // https://discord.com/channels/460491088004907029/460534914425552896/837217137390518342
  // Proxy is not needed no more
  // url = addcorsproxy(url)

  const dispatch = useDispatch();

  useEffect(() => {
    const result = async () => {
      let response = await axios({ url: url, method: "get" });
      console.log("animeRes is fetched");
      const retDAI: detailAnimeInfo = {
        title_japanese: response?.data.title_japanese,
        trailer_url: response?.data.trailer_url,
        synopsis: response?.data.synopsis,
        genres: [],
        image: response?.data.image_url,
        title: response?.data.title,
        malid: response?.data.mal_id,
      };
      setDai(retDAI);
      dispatch(singleDetailInfo(retDAI));
    };

    if (malid != -1) result();
  }, [malid]);

  return dai;
}
