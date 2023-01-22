import { React } from "react";
import { Container, ImageList, ImageListItem } from "@mui/material";
import MyModalImage from "../../components/Modal";

import collagraph1 from "../../assets/images/collagraph1.jpg";
import collagraph2 from "../../assets/images/collagraph2.jpg";
import collagraph3 from "../../assets/images/collagraph3.jpg";
import collagraph4 from "../../assets/images/collagraph4.jpg";
import collagraph5 from "../../assets/images/collagraph5.jpg";
import collagraph6 from "../../assets/images/collagraph6.jpg";
import collagraph7 from "../../assets/images/collagraph7.jpg";
import collagraph8 from "../../assets/images/collagraph8.jpg";
import collagraph9 from "../../assets/images/collagraph9.jpg";
import collagraph10 from "../../assets/images/collagraph10.jpg";
import collagraph11 from "../../assets/images/collagraph11.jpg";
import collagraph12 from "../../assets/images/collagraph12.jpg";
import collagraph13 from "../../assets/images/collagraph13.jpg";
import collagraph14 from "../../assets/images/collagraph14.jpg";
import collagraph15 from "../../assets/images/collagraph15.jpg";
import JakePress from "../../assets/images/JakePress.jpg";

const CollagraphGallery = () => {
  const photos = [
    {
      img: collagraph1,
      title: "image",
    },
    {
      img: collagraph2,
      title: "image",
    },
    {
      img: collagraph3,
      title: "image",
    },
    {
      img: collagraph10,
      title: "image",
    },
    {
      img: collagraph4,
      title: "image",
    },
    {
      img: collagraph5,
      title: "image",
    },
    {
      img: collagraph6,
      title: "image",
    },
    {
      img: collagraph9,
      title: "image",
    },
    {
      img: collagraph11,
      title: "image",
    },
    {
      img: collagraph8,
      title: "image",
    },
    {
      img: collagraph7,
      title: "image",
    },
    {
      img: JakePress,
      title: "image",
    },
    {
      img: collagraph12,
      title: "image",
    },
    {
      img: collagraph13,
      title: "image",
    },
    {
      img: collagraph14,
      title: "image",
    },
    {
      img: collagraph15,
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

export default CollagraphGallery;
