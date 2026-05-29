import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/footer/footer";
import About from "./sections/about/about";
import Navbar from './components/Navbar/Navbar';
import Packages from './sections/packages/packages';

function App() {
  
  return (
    <>
      <Navbar/> 
      <About />
      <Packages />
      <Footer />
    </>
  )
}

export default App
