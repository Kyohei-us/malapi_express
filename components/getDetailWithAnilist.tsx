import { useQuery } from "@apollo/client";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GET_DETAIL } from "../src/queries/getDetail";
import { Media } from "../src/types";

export default function GetDetailWithAnilist() {
  const [queryStr, setQueryStr] = useState(1);
  const { loading, error, data } = useQuery<{ Media: Media }, { a: number }>(
    GET_DETAIL,
    {
      variables: { a: queryStr },
    }
  );

  let timeout: any;
  var debounce = function (func: Function, delay: number) {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };

  function queryOnChange(q: string) {
    let qnum = parseInt(q);
    debounce(() => setQueryStr(qnum), 1 * 1000);
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <TextField
        type="search"
        placeholder="type anime id"
        onChange={(e) => queryOnChange(e.target.value)}
      />
      <div>
        {data && data.Media && !loading ? (
          <p>
            {data.Media.id} {data.Media.title?.native}
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
