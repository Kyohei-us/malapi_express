import { Button, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { showSingleDetail } from "../store/actions";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 400,
    width: 300,
  },
});

export default function AnimeImageCard(props: {
  image: string;
  title: string;
  malid: number;
}) {
  const { image, title, malid } = props;
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(showSingleDetail(malid))}
        >
          Show More Detail
        </Button>
      </CardActions>
    </Card>
  );
}
