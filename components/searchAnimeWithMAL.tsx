// Import dependencies
import React, { useState, useEffect } from "react";
import useSearchAnime from "../hooks/useSearchAnime";
import {
  Box,
  createStyles,
  InputAdornment,
  makeStyles,
  Slider,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AnimeImageCard from "./animeImageCard/animeImageCard";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     sliderSearchResult: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       flexDirection: "column",
//       padding: "50px",
//       backgroundColor: "#116466",
//     },
//     root: {
//       textAlign: "center",
//     },
//   })
// );

export default function SearchAnimeWithMAL(props: {
  numberForResults: number;
}) {
  const { numberForResults } = props;
  const [query, setQuery] = useState("");

  const baiList = useSearchAnime(query, numberForResults);

  let timeout: any;
  var debounce = function (func: Function, delay: number) {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };

  function queryOnChange(q: string) {
    debounce(() => setQuery(q), 2 * 1000);
  }

  const animeCards = baiList.map((baiEle) => (
    <div
      key={baiEle.malid}
      style={{
        margin: "16px",
      }}
    >
      <AnimeImageCard key={baiEle.title} bai={baiEle} />
    </div>
  ));

  const [numberOfAnimeToShow, setNumberOfAnimeToShow] = useState(1);
  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setNumberOfAnimeToShow(newValue as number);
  };

  return (
    <Box>
      <TextField
        type="search"
        placeholder="type anime name"
        onChange={(e) => queryOnChange(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <div>
        <Typography id="discrete-slider" gutterBottom>
          Number of results to show
        </Typography>
        <Slider
          defaultValue={1}
          // getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          onChangeCommitted={handleSliderChange}
          step={1}
          marks
          min={1}
          max={numberForResults}
        />
        {baiList ? (
          animeCards.slice(
            0,
            numberOfAnimeToShow > baiList.length
              ? baiList.length
              : numberOfAnimeToShow
          )
        ) : (
          <p>No Image Available</p>
        )}
      </div>
    </Box>
  );
}
