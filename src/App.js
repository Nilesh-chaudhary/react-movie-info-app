import React from "react";

//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Home from "./components/Home";
// import HeroImage from "./components/HeroImage";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    {/* <Home /> */}
    {/* <HeroImage /> */}
    <GlobalStyle />
  </Router>
);

export default App;
