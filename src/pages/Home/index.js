import React from "react";

import JakeStudio from "../../assets/images/jakestudio.jpg";

const Home = () => {
  return (
    <div className="bio-container">
      <img src={JakeStudio} alt="#"></img>
      <div className="bio">
        <h2>Jake Wilson</h2>
        <p>bio for jake</p>
      </div>
    </div>
  );
};

export default Home;
