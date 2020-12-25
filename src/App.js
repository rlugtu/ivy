import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Lists from './pages/Lists'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  const [navBarOpen, setNavBarOpen] = useState(false)
  return (
    <div className="App">
      <div className="navBar" onClick={() => setNavBarOpen(!navBarOpen)}>
        {navBarOpen && (
          <Navbar />
        )}
      </div>
      <Route exact path ="/" component={Dashboard} />
      <Route exact path ="/notes" component={Lists} />

    </div>
  );
}

export default App;
