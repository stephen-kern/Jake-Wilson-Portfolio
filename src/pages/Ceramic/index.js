import React from "react";
import { Container, ImageList, ImageListItem } from "@mui/material";
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
      title: "image",
    },
    {
      img: ceramic2,
      title: "image",
    },
    {
      img: ceramic3,
      title: "image",
    },
    {
      img: ceramic4,
      title: "image",
    },
    {
      img: ceramic5,
      title: "image",
    },
    {
      img: ceramic6,
      title: "image",
    },
    {
      img: kiln,
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

export default CeramicGallery;