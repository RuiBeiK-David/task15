import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Features from './components/Features';
import About from './components/About';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Banner />
      <Features />
      <About />
      <Counter />
    </div>
  );
}

export default App;
