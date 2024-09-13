import React from 'react';
import Navbar from './components/Navbar';
import Roulette from './components/Roulette';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="roulette-wrapper">
        <Roulette />
      </div>
      <Footer />
    </div>
  );
}

export default App;