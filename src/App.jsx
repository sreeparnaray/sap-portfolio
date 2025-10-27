import { useState } from 'react'
import { NavBar } from "./components/NavBar.jsx";
import { Banner } from "./components/Banner.jsx";
import { Skills } from "./components/Skills.jsx";
import { Journey } from "./components/Journey.jsx";
import { Certification } from "./components/Certification.jsx";
import { Footer } from "./components/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Journey />
      <Skills />
      <Certification />
      <Footer/>
    <div class="credits">
    Designed by <a href="">Sreeparna Ray</a>
  </div>
    </div> );
}

export default App
