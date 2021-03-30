import React from 'react';
//import logo from './logo.svg';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import '@ionic/react/css/core.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Servizi from './components/Servizi/Servizi';
import News from './components/Contatti/News';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/News" component={News}/>
          <Route exact path="/Servizi" component={Servizi}/>
        </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
