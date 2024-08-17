import React from 'react';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Services />
      </main>
    </div>
  );
}

export default App;
