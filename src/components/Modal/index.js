// import { React, useEffect, useState } from "react";

// const ImageModal = ({ photos, index }) => {
//   const [openModal, setOpenModal] = useState(false);
//   const handleOpenModal = () => setOpenModal(true);
//   const handleCloseModal = () => setOpenModal(false);

//   useEffect(() => {
//     if (openModal) {
//       document.body.classList.add("no-scroll");
//     } else {
//       document.body.classList.remove("no-scroll");
//     }
//   }, [openModal]);

//   return (
//     <div>
//       <img
//         src={photos[index].img}
//         alt={photos[index].title}
//         onClick={handleOpenModal}
//       ></img>
//       {openModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <img
//               className="modal-image"
//               src={photos[index].img}
//               alt={photos[index].title}
//             />
//             <button onClick={handleCloseModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageModal;


import React from "react";
import ModalImage from "react-modal-image";

const Modal = ({ photos, index }) => {
  return (
    <ModalImage
      className="modal-image"
      small={photos[index].img}
      large={photos[index].img}
      alt={photos[index].title}
    />
  );
};

export default Modal;
