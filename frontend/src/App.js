import React, { useEffect } from 'react';

import './App.css';
import InicialPage from './pages/InicialPage/InicialPage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="tela">
      <NavBar />
      <InicialPage />
    </div>
  );
}

export default App;
