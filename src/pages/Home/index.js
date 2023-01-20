import React from "react";

import JakeStudio from "../../assets/images/jakestudio.jpg";

const Home = () => {
  return (
    <div className="bio-container">
      <img src={JakeStudio} alt="#"></img>
      <div className="bio">
        <h2>Jake Wilson</h2>
        <p>As a fine arts printmaker with a BFA degree from Southern Illinois University Edwardsville, I specialize in a diverse range of printmaking techniques, such as woodcut, linocut, wood engraving, collagraph, and stone lithography. My artwork explores subjects of environmentalism, land-use, sustainability in architecture, and the impact of American city planning and development. My work has been featured in notable exhibitions, including Southern Illinois University Edwardsville, The Sheldon Arts Gallery (St. Louis, MO), and Manifest Gallery (Cincinnati, OH). Please do not hesitate to contact me for any inquiries or further information.</p>
      </div>
    </div>
  );
};

export default Home;
