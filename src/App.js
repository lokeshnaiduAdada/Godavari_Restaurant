import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Service/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
