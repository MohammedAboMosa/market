import React from "react";
import Sign from "./components/Sign.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import ShowItem from "./components/ShowItem.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/ShowItem" element={<ShowItem />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/About" element={<About />} />
          <Route path="/ShowItem" element={<ShowItem />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
