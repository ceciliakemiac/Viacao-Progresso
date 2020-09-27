import React, { useEffect } from 'react';

import './App.css';
import Inicial from './pages/Inicial/Inicial';
import CorpoCeleste from './components/CorpoCeleste/CorpoCeleste';
import CorposCelestes from './components/CorposCelestes/CorposCelestes';

function App() {
  return (
    <div className="App">
      {/* <CorpoCeleste fotoname="arcturus" name="Arcturus" /> */}
      {/* <CorposCelestes /> */}
      <Inicial />
    </div>
  );
}

export default App;
