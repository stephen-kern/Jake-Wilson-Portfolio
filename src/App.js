import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CollagraphGallery from "./pages/Collagraph";
import EtchingsGallery from "./pages/Etching";
import ReliefGallery from "./pages/Relief";
import CeramicGallery from "./pages/Ceramic";
import ContactUs from "./pages/Contact";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/collagraphs" element={<CollagraphGallery />}/>
            <Route path="/etchings" element={<EtchingsGallery />}></Route>
            <Route path="/relief" element={<ReliefGallery />}></Route>
            <Route path="/ceramics" element={<CeramicGallery />}></Route>
            <Route path="/curriculum" element={<Resume />}> </Route>
            <Route path="/contact" element={<ContactUs />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
