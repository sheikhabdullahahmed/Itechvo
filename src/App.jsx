import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx'
import About from './Components/About/index.jsx'
import AboutCard from './Components/AboutCard/AboutCard.jsx'
import Services from './Components/Services/Services.jsx';
import Contact from './Components/Contact/index.jsx'
import Faqs from "./Components/Faqs/index.jsx"
import Footerinput from './Components/Footerinput/index.jsx'
import Footer from './Components/Footer/index.jsx';
import Footerr from './Components/Footerr/Footerr.jsx'
import ScrollToTopButton from './Components/ScrollButton/index.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <AboutCard />
      <Services />
      <Contact />
      <Faqs />
      <Footerinput />
      <Footer />
      <Footerr />
      <ScrollToTopButton />
    </Router>
  )
};

export default App;
