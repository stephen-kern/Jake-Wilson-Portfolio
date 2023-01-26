import React from "react";
import { Container, ImageListItem, } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import MyModalImage from "../../components/Modal";

import ceramic1 from "../../assets/images/ceramic1.JPG";
import ceramic2 from "../../assets/images/ceramic2.JPG";
import ceramic3 from "../../assets/images/ceramic3.JPG";
import ceramic4 from "../../assets/images/ceramic4.JPG";
import ceramic5 from "../../assets/images/ceramic5.JPG";
import ceramic6 from "../../assets/images/ceramic6.JPG";
import kiln from "../../assets/images/kiln.jpg";

const CeramicGallery = () => {
  const photos = [
    {
      img: ceramic1,
    },
    {
      img: ceramic2,
    },
    {
      img: ceramic3,
    },
    {
      img: ceramic4,
    },
    {
      img: ceramic5,
    },
    {
      img: ceramic6,
    },
    {
      img: kiln,
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

export default CeramicGallery;