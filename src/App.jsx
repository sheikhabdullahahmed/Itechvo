import React from 'react';
import Contact from './Components/Contact/index.jsx'
import About from './Components/About/index.jsx'
// import Footer from './Components/Footer/index.jsx'
import Footerinput from './Components/Footerinput/index.jsx'
import Footer from './Components/Footer/index.jsx';
import Faqs from "./Components/Faqs/index.jsx"
import Home from './Components/Home/Home.jsx'
import ScrollToTopButton from './Components/ScrollButton/index.jsx';

const App = () => {
  return <div>
    
  <Home/>
    <Contact/>
    <About/>
    <Faqs/>
    <Footerinput/>
    <Footer/>
    <ScrollToTopButton />

  </div>;
};

export default App;
