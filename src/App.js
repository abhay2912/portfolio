import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro" ;
import Services from "./Components/Services/Services";
import Experiences from "./Components/Experiences/Experiences";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import { themeContext } from "./Context";
import { useContext } from "react";

import './App.css';

function App() {
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      backgroundColor : darkMode? 'black': '',
      color: darkMode? 'white': ''
    }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experiences/>
      <Works/>
      {/* <Portfolio/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
