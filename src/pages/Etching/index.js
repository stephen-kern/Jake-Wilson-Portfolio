import React from "react";
import { Container, ImageListItem, } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import MyModalImage from "../../components/Modal";

import etching1 from "../../assets/images/etching1.jpg";
import studio from "../../assets/images/jakestudio.jpg";
import etching2 from "../../assets/images/etching2.jpg";
import etching3 from "../../assets/images/etching3.jpg";
import etching4 from "../../assets/images/etching4.jpg";
import etching5 from "../../assets/images/etching5.jpg";
import etching6 from "../../assets/images/etching6.jpg";

const EtchingsGallery = () => {
  const photos = [
    {
      img: etching1,
    },
    {
      img: studio,
    },
    {
      img: etching2,
    },
    {
      img: etching3,
    },
    {
      img: etching5,
    },
    {
      img: etching4,
    },
    {
      img: etching6,
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

export default EtchingsGallery;
