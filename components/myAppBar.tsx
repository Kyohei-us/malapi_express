import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { searchByQuery } from "../store/action/searchByQuery";
import { useMediaQuery } from "../hooks/useMediaQuery";
import {
  alpha,
  AppBar,
  Box,
  Button,
  Drawer,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export default function MyAppBar(props: { pageName: string }) {
  const { pageName } = props;
  const dispatch = useDispatch();

  let timeout: any;
  var debounce = function (func: Function, delay: number) {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };

  const queryOnChange = (query: string) => {
    debounce(() => dispatch(searchByQuery(query)), 1 * 1000);
  };

  const isPageWide = useMediaQuery(`(min-width:426px)`);

  const [isSidemenuOpen, setIsSidemenuOpen] = useState(false);

  const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsSidemenuOpen(open);
  };

  const list = (anchor: string) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Search"].map((text, index) => (
          <ListItem button component="a" key={text} href="/malapi">
            <ListItemIcon>
              {index === 0 ? (
                <SearchIcon />
              ) : index % 2 === 0 ? (
                <InboxIcon />
              ) : (
                <MailIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <React.Fragment key={"left"}>
            <Drawer
              anchor={"left"}
              open={isSidemenuOpen}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
          </React.Fragment>
          <Typography variant="h6">{pageName}</Typography>
          {isPageWide && (
            <>
              <Search>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel>Search</InputLabel>
                  <OutlinedInput
                    onChange={(e) => queryOnChange(e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    }
                    label="Search"
                  />
                </FormControl>
              </Search>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
