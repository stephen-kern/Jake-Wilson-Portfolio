import React from "react";
import { Container, ImageList, ImageListItem } from "@mui/material";
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
      title: "image",
    },
    {
      img: studio,
      title: "image",
    },
    {
      img: etching2,
      title: "image",
    },
    {
      img: etching3,
      title: "image",
    },
    {
      img: etching5,
      title: "image",
    },
    {
      img: etching4,
      title: "image",
    },
    {
      img: etching6,
      title: "image",
    },
  ];

  return (
    <Container maxWidth="xxl">
      <ImageList variant="masonry" cols={4} gap={32}>
        {photos.map((item, index) => (
          <ImageListItem key={item.img}>
            <MyModalImage img={item.img} title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default EtchingsGallery;
