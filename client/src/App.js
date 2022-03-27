import React,{Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';

const App=()=> {
  return (
    <Router>
    <Fragment className="App">
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>

        </Routes>
      </div>
    </Fragment>
    </Router>
  );
}

export default App;
