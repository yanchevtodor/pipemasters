import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Servises from './components/Servises';
import Info from './components/Info';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="switch">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/servises' component={Servises} />
          <Route path='/info' component={Info} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
        </div>
        <Footer />
      </div> 
    </BrowserRouter>
  );
}

export default App;
