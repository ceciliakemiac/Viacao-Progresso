import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import AboutCorpo from './pages/Corpo/AboutCorpo';
import InicialPage from './pages/InicialPage/InicialPage';
import Usuario from './pages/Usuario/Usuario';
import NavBar from './components/NavBar/NavBar';
import CorposProvider from './context/CorposContext';
import SelectProvider from './context/SelectContext';

function App() {
  return (
    <SelectProvider>
      <CorposProvider>
        <BrowserRouter>
          <div className="tela">
            <NavBar />
            <Switch>
              <Route path="/about-corpo/:id" component={AboutCorpo} />
              <Route path="/usuario/:id" component={Usuario} />
              <Route path="/" component={InicialPage} />
            </Switch>
            {/* <InicialPage /> */}
          </div>
        </BrowserRouter>
      </CorposProvider>
    </SelectProvider>
  );
}

export default App;
