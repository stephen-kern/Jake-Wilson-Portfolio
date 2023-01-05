import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import CollagraphGallery from "./pages/Collagraph";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            {/* <Route path="" element={<Home />}/> */}
            <Route path="/collagraphs" element={<CollagraphGallery />}/>
            {/* <Route path="" element={<Home />}/>
            <Route path="" element={<Home />}/>
            <Route path="" element={<Home />}/>
            <Route path="" element={<Home />}/> */}
          </Routes>
        </div>
        {/* <Footer></Footer> */}
      </Router>
    </div>
  );
};

export default App;
