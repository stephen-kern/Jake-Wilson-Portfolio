import React from "react";
import { Container, ImageList, ImageListItem } from "@mui/material";

import relief1 from "../../assets/images/relief1.jpg";
import relief2 from "../../assets/images/relief2.jpg";
import relief3 from "../../assets/images/relief3.jpg";
import relief4 from "../../assets/images/relief4.jpg";
import relief5 from "../../assets/images/relief5.jpg";
import relief6 from "../../assets/images/relief6.jpg";
import relief7 from "../../assets/images/relief7.jpg";
import relief8 from "../../assets/images/relief8.jpg";
import relief9 from "../../assets/images/relief9.jpg";
import relief10 from "../../assets/images/relief10.jpg";
import relief11 from "../../assets/images/relief11.jpg";
import relief12 from "../../assets/images/relief12.jpg";
import relief13 from "../../assets/images/relief13.jpg";
import relief14 from "../../assets/images/relief14.jpg";
import relief15 from "../../assets/images/relief15.jpg";
import relief16 from "../../assets/images/relief16.jpg";
import relief17 from "../../assets/images/relief17.jpg";
import relief18 from "../../assets/images/relief18.jpg";

const ReliefGallery = () => {
  const photos = [
    {
      img: relief1,
      title: "image",
    },
    {
      img: relief2,
      title: "image",
    },
    {
      img: relief3,
      title: "image",
    },
    {
      img: relief4,
      title: "image",
    },
    {
      img: relief5,
      title: "image",
    },
    {
      img: relief6,
      title: "image",
    },
    {
      img: relief7,
      title: "image",
    },
    {
      img: relief8,
      title: "image",
    },
    {
      img: relief9,
      title: "image",
    },
    {
      img: relief10,
      title: "image",
    },
    {
      img: relief11,
      title: "image",
    },
    {
      img: relief12,
      title: "image",
    },
    {
      img: relief13,
      title: "image",
    },
    {
      img: relief14,
      title: "image",
    },
    {
      img: relief15,
      title: "image",
    },
    {
      img: relief16,
      title: "image",
    },
    {
      img: relief17,
      title: "image",
    },
    {
      img: relief18,
      title: "image",
    },
  ];

  return (
    <Container maxWidth="xxl">
      <ImageList variant="masonry" cols={4} gap={32}>
        {photos.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default ReliefGallery;
