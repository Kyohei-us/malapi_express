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
import React, { useState } from "react";
import { AnimeInfoWA } from "../../common/types";
import DescriptionDialog from "../descriptionDialog";

// Sideway Anime Image Card With Anilist
export default function SAICWA(props: { bai: AnimeInfoWA; next: Function }) {
  const { bai, next } = props;
  const [detailOpen, setDetailOpen] = useState(false);
  const closeDetail = () => {
    setDetailOpen(false);
  };

  return (
    <>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography component="h5" variant="h5">
              {bai.title.native ? bai.title.native : bai.title.english}
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
              onClick={() => setDetailOpen(!detailOpen)}
            >
              Show Description
            </Button>
          </div>
        </Box>
        <CardMedia
          image={
            bai.coverImage.large
              ? bai.coverImage.large
              : "../../public/images/image-not-found.png"
          }
          title="Live from space album cover"
          component="img"
          width="70%"
        />
      </Card>
      <DescriptionDialog
        closeDetail={() => closeDetail()}
        detailOpen={detailOpen}
        bai={bai}
      />
    </>
  );
}
