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
            <Route path="/Jake-Wilson-Portfolio" element={<Home />}/>
            <Route path="/Jake-Wilson-Portfolio/collagraphs" element={<CollagraphGallery />}/>
            <Route path="/Jake-Wilson-Portfolio/etchings" element={<EtchingsGallery />}></Route>
            <Route path="/Jake-Wilson-Portfolio/relief" element={<ReliefGallery />}></Route>
            <Route path="/Jake-Wilson-Portfolio/ceramics" element={<CeramicGallery />}></Route>
            <Route path="/Jake-Wilson-Portfolio/curriculum" element={<Resume />}> </Route>
            <Route path="/Jake-Wilson-Portfolio/contact" element={<ContactUs />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
