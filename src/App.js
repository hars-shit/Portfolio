import React from 'react';
import Home from './components/Home';
import './styles/App.scss'
import { Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/AboutMe' element={<AboutMe />}/>
      </Routes>
    
    </>
  );
}

export default App;
