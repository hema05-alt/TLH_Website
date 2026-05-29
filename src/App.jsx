import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/footer/footer";
import About from "./sections/about/about";
import Navbar from './components/Navbar/Navbar';
import Herosection from './components/Herosection/Herosection';

function App() {
  
  return (
    <>
    <Navbar/>
    <Herosection/>
     
      <Navbar/> 
      <About />
      <Footer />
    </>
  )
}

export default App
