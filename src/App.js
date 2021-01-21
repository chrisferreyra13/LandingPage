import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Hire from './pages/Hire';
import Join from './pages/Join';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/hire' component={Hire} />
          <Route path='/projects' component={Projects} />
          <Route path='/join' component={Join} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
