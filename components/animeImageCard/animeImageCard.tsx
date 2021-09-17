import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
  Button,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import React from "react";
import { useDispatch } from "react-redux";
import { basicAnimeInfo } from "../../common/types";
import { showSingleDetail } from "../../store/action/showSingleDetail";

export default function AnimeImageCard(props: {
  bai: basicAnimeInfo;
  next?: Function;
}) {
  const { bai, next } = props;

  const dispatch = useDispatch();

  return (
    <Card>
      <CardMedia
        image={bai.image}
        title={bai.title}
        component="img"
        height="70%"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {bai.title}
        </Typography>
      </CardContent>
      <div>
        {next ? (
          <>
            <IconButton aria-label="previous" onClick={() => next(-1)}>
              <NavigateBeforeIcon />
            </IconButton>
            <IconButton aria-label="next" onClick={() => next(1)}>
              <NavigateNextIcon />
            </IconButton>
          </>
        ) : (
          <></>
        )}
      </div>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(showSingleDetail(bai.malid))}
        >
          Show More Detail
        </Button>
      </CardActions>
    </Card>
  );
}
