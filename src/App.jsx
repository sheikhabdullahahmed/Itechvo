import React from 'react';
import Contact from './Components/Contact/index.jsx'
import About from './Components/About/index.jsx'
// import Footer from './Components/Footer/index.jsx'
import Footerinput from './Components/Footerinput/index.jsx'
import Footer from './Components/Footer/index.jsx';
import Faqs from "./Components/Faqs/index.jsx"

const App = () => {
  return <div>
    <Contact/>
    <About/>
    <Footerinput/>
    <Faqs/>
    {/* <Footer/> */}

  </div>;
};

export default App;
