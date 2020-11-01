import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import AboutCorpo from './pages/Corpo/AboutCorpo';
import InicialPage from './pages/InicialPage/InicialPage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="tela">
        <NavBar />
        <Switch>
          <Route path="/about-corpo/:id" component={AboutCorpo} />
          <Route path="/" component={InicialPage} />
        </Switch>
        {/* <InicialPage /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
