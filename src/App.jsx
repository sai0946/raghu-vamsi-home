import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Products from './components/Products';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useGlobalReveal from './hooks/useGlobalReveal';
import Loader from './components/Loader';

function App() {
  useGlobalReveal();
  return (
    <div className="rv-app">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Products />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

