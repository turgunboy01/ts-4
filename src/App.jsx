import React from "react";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./pages/services/Services";
import Footer from "./components/footer/Footer";
import Onion from "./components/onion/Onion";
import Career from "./pages/career/Career";
import Blogs from "./pages/blogs/Blogs";
import Portfolio from "./pages/portfolio/Portfolio";
import About from "./pages/about/About";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/brief" element={<Services />} />
          <Route path="/vacancy" element={<Career />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
      {/* <Onion /> */}
    </div>
  );
};

export default App;
