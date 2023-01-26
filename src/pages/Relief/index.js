import React from "react";
import { Container, ImageListItem, } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import MyModalImage from "../../components/Modal";

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
    },
    {
      img: relief2,
    },
    {
      img: relief3,
    },
    {
      img: relief4,
    },
    {
      img: relief5,
    },
    {
      img: relief6,
    },
    {
      img: relief7,
    },
    {
      img: relief8,
    },
    {
      img: relief9,
    },
    {
      img: relief10,
    },
    {
      img: relief11,
    },
    {
      img: relief12,
    },
    {
      img: relief13,
    },
    {
      img: relief14,
    },
    {
      img: relief15,
    },
    {
      img: relief16,
    },
    {
      img: relief17,
    },
    {
      img: relief18,
    },
  ];

  return (
    <Container maxWidth="xxl">
      <Masonry columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={{ sm: 2, md: 3, lg: 4, xl: 4 }}>
        {photos.map((item, index) => (
          <ImageListItem key={item.img}>
            <MyModalImage img={item.img} title={item.title} />
          </ImageListItem>
        ))}
      </Masonry>
    </Container>
  );
};

export default ReliefGallery;
