import React, { useEffect } from 'react';

import './App.css';
import CorpoCeleste from './components/CorpoCeleste/CorpoCeleste';

function App() {
  return (
    <div className="App">
      <CorpoCeleste fotoname="arcturus" name="Arcturus" />
    </div>
  );
}

export default App;
