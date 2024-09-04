import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Testimoni from './components/Testi';
import Work from './components/Work';

function App() {

  return (
    <>
        <Navbar />
        <Home />
        <About />
        <Work />
        <Testimoni />
        <Footer />
    </>
  );
};

export default App;
