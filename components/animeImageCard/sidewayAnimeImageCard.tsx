import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import React from "react";
import { useDispatch } from "react-redux";
import { basicAnimeInfo } from "../../common/types";
import { showSingleDetail } from "../../store/action/showSingleDetail";

export default function SidewayMediaCard(props: {
  bai: basicAnimeInfo;
  next: Function;
}) {
  const { bai, next } = props;
  const dispatch = useDispatch();

  return (
    <Box>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography component="h5" variant="h5">
              {bai.title}
            </Typography>
          </CardContent>
          <div>
            <IconButton aria-label="previous" onClick={() => next(-1)}>
              <NavigateBeforeIcon />
            </IconButton>
            <IconButton aria-label="next" onClick={() => next(1)}>
              <NavigateNextIcon />
            </IconButton>
            <Button
              size="small"
              color="primary"
              onClick={() => dispatch(showSingleDetail(bai.malid))}
            >
              Show More Detail
            </Button>
          </div>
        </Box>
        <CardMedia
          image={bai.image}
          title={bai.title}
          component="img"
          width="70%"
        />
      </Card>
    </Box>
  );
}
