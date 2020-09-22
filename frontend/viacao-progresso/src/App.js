import React, { useEffect } from 'react';

import './App.css';
import CorpoCeleste from './components/CorpoCeleste/CorpoCeleste';
import CorposCelestes from './components/CorposCelestes/CorposCelestes';

function App() {
  return (
    <div className="App">
      {/* <CorpoCeleste fotoname="arcturus" name="Arcturus" /> */}
      <CorposCelestes />
    </div>
  );
}

export default App;
