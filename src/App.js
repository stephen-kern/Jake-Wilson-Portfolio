import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>

        </div>
        {/* <Footer></Footer> */}
      </Router>
    </div>
  );
};

export default App;
