import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/index.js";
import Report from "./pages/reportagens/index.js";
import News from "./pages/news/index.js";
import Webstories from "./pages/webstories/index.js";
import Audiovisual from "./pages/audiov/index.js";
import Sobre from "./pages/sobre/index.js";
import Contato from "./pages/contato/index.js";
import Media from "./pages/media/index.js";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/reportagens' element={<Report />} />
        <Route path='/hardnews' element={<News />} />
        <Route path='/audiovisual' element={<Audiovisual />} />
        <Route path='/webstories' element={<Webstories />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/midia_impressa' element={<Media />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;