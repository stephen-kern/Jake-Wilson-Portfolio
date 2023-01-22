import React from 'react'
import ModalImage from "react-modal-image";

const MyModalImage = ({img, title}) => {
  return (
      <ModalImage
        src={`${img}?w=248&fit=crop&auto=format`}
        srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={title}
        loading="lazy"
        small={img}
        large={img}
        hideDownload={true}
        hideZoom={true}
      />
  )
}

export default MyModalImage
