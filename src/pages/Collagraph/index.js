import { React } from "react";
import { Container, ImageListItem, } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
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
import sprawl from "../../assets/images/sprawl.jpg";
import steel from "../../assets/images/steel.jpg";
import studio3 from "../../assets/images/studio3.jpg";
import youremine from "../../assets/images/youremine.jpg";
import mine from "../../assets/images/mine.jpg";
import curb from "../../assets/images/curb.jpg";
import cross from "../../assets/images/cross.jpg";
import pillar from "../../assets/images/pillar.jpg";
import collage from "../../assets/images/collage.jpg";
import hast from "../../assets/images/collagraph-hast.jpg";
import purpose from "../../assets/images/purpose.jpg";

const CollagraphGallery = () => {
  const photos = [
    {
      img: collagraph1,
    },
    {
      img: collagraph2,
    },
    {
      img: collagraph3,
    },
    {
      img: collagraph10,
    },
    {
      img: sprawl,
    },
    {
      img: collagraph4,
    },
    {
      img: collagraph5,
    },
    {
      img: collagraph11,
    },
    {
      img: collagraph9,
    },
    {
      img: collagraph6,
    },
    {
      img: collagraph8,
    },
    {
      img: collagraph7,
    },
    {
      img: JakePress,
    },
    {
      img: collagraph12,
    },
    {
      img: collagraph13,
    },
    {
      img: collagraph14,
    },
    {
      img: collagraph15,
    },
    {
      img: purpose,
    },
    {
      img: steel,
    },
    {
      img: collage,
    },
    {
      img: mine,
    },
    {
      img: curb,
    },
    {
      img: youremine,
    },
    {
      img: cross,
    },
    {
      img: pillar,
    },
    {
      img: hast,
    },
    {
      img: studio3,
    },
    
  ];


  return (
    <Container maxWidth="xxl">
      <Masonry columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={{ sm: 2, md: 3, lg: 4, xl: 4 }}>
        {photos.map((item, index) => (
          <ImageListItem key={item.img}>
            <MyModalImage img={item.img} />
          </ImageListItem>
        ))}
      </Masonry>
    </Container>
  );
};

export default CollagraphGallery;
