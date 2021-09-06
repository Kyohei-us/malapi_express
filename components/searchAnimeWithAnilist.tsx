import { useQuery } from "@apollo/client";
import { Box, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimeData, GET_ANIME, MediaVars } from "../src/queries/getAnime";
import { RootState } from "../store";
import { searchByQuery } from "../store/action/searchByQuery";
import SAICWAwrapper from "./animeImageCardWithAnilist/SAICWAwrapper";

export default function SearchAnimeWithAnilist() {
  // const [queryStr, setQueryStr] = useState("");
  const query = useSelector((state: RootState) => state.searchByQuery.query);
  const { loading, error, data } = useQuery<AnimeData, MediaVars>(GET_ANIME, {
    variables: { q: query },
  });

  let timeout: any;
  var debounce = function (func: Function, delay: number) {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };

  const dispatch = useDispatch();

  function queryOnChange(q: string) {
    // debounce(() => setQueryStr(q), 1 * 1000);
    debounce(() => dispatch(searchByQuery(q)), 1 * 1000);
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  let medium =
    data && data.Page && data.Page.media && !loading ? data.Page.media : [];

  return (
    <>
      {/* <div
        style={{
          margin: "16px",
        }}
      >
        <TextField
          type="search"
          placeholder="type anime name"
          onChange={(e) => queryOnChange(e.target.value)}
        />
      </div> */}
      <div>
        <SAICWAwrapper baiList={medium} />
      </div>
    </>
  );
}
