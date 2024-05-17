import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './Style.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;

