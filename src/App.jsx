
import CustomNavbar from "./Components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Banner from './Components/Banner'
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Contect from "./Components/Contect";
import Footer from "./Components/Footer";



function App() {
return (
    <>
     <CustomNavbar />
     <Banner/>
     <Skills/>
     <Project/>
     <Contect/>
     <Footer/>
   
    </>
  )
}

export default App
