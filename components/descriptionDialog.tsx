import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Button,
} from "@material-ui/core";
import React from "react";
import { AnimeInfoWA } from "../common/types";

export default function DescriptionDialog(props: {
  closeDetail: Function;
  detailOpen: boolean;
  bai: AnimeInfoWA;
}) {
  const { closeDetail, detailOpen, bai } = props;

  return (
    <Dialog
      onClose={() => closeDetail()}
      aria-labelledby="customized-dialog-title"
      open={detailOpen}
    >
      <DialogTitle id="customized-dialog-title">Anime Description</DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom variant="h5">
          {bai.description
            ? bai.description
                .replaceAll("<br>", "\n")
                .replaceAll("<i>", "")
                .replaceAll("</i>", "")
            : "Description not available."}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => closeDetail()} color="primary">
          Close description
        </Button>
      </DialogActions>
    </Dialog>
  );
}
