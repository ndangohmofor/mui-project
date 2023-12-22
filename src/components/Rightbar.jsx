import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box position={"fixed"} width={500}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://play-lh.googleusercontent.com/a-/ALV-UjXY1qlABXyvuFVHWvcjq5lvaBlfPDOaItvhMMYzs-XErbU"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://www.shutterstock.com/image-photo/head-shot-portrait-african-young-600nw-1606560376.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://media.istockphoto.com/id/1212263056/photo/young-beautiful-african-american-afro-woman-with-curly-hair-wearing-casual-turtleneck-sweater.webp?b=1&s=170667a&w=0&k=20&c=SUMea_vXDK00XAYtOkJ6PIlz8pQY3jqlDtdcpjMDdns="
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://media.istockphoto.com/id/1178929022/photo/beautiful-laughter-in-front-of-purple-wall.webp?b=1&s=170667a&w=0&k=20&c=uLxrqeDs8mxCDGHi7swUjirUlgZAgxgHVtTnsNfxmsw="
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} marginTop={2}>
          Latest photos
        </Typography>
        <ImageList
          cols={3}
          rowHeight={150}
          gap={5}
          sx={{ "&::-webkit-scrollbar": { display: "none" } }}
        >
          <ImageListItem>
            <img
              src="https://media.istockphoto.com/id/1429991322/photo/carefree-young-woman-playing-music-using-a-smartphone-and-earbuds.webp?b=1&s=170667a&w=0&k=20&c=q_T3IYf4WI2lhRvm59eQJfEolStG-QPdVxl0MvJik2Q="
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://media.istockphoto.com/id/1457466875/photo/cheerful-black-woman-celebrating-victory.webp?b=1&s=170667a&w=0&k=20&c=czorxth-ILjrGIIChbhknDiuyZ_HL8aXV12oGPBLomU="
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://media.istockphoto.com/id/1359576979/photo/facepalm-gesture-embarrassed-african-american-girl-with-hand-on-face-be-shy-feeling-regret.webp?b=1&s=170667a&w=0&k=20&c=SgFYOfTiaakydj6kizNaF4vmUgUtiwoMqv-0wDDaSCQ="
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://media.istockphoto.com/id/1340779174/photo/shot-of-a-beautiful-young-woman-flexing-while-standing-against-a-turquoise-background.webp?b=1&s=170667a&w=0&k=20&c=B2kQ2lsFJiCivHci_QOjpmR3L0I8jEf0_Jk-Iv5EnNM="
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=600"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/11922117/pexels-photo-11922117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} marginTop={3}>
          Latest conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://www.shutterstock.com/image-photo/head-shot-portrait-african-young-600nw-1606560376.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://images.pexels.com/photos/11922117/pexels-photo-11922117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
