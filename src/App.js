import React from 'react';
import Sign from './components/Sign.js'
import Navb from './components/Navb.js'
import Home from './components/Home.js'
import About from './components/About.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div >
<BrowserRouter>



    <Routes>
      <Route exact  path="/"             element={<Home/>} />
      <Route        path="/About"        element={<About />} />
      <Route        path="/Sign"         element={<Sign />} />
    </Routes>


</BrowserRouter>
    </div>
  );
}

export default App;
