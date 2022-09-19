import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './component/Navbar1';
import Banner from './component/Banner';
import Section1 from './component/Section1';
import Section2 from './component/Section2';
import Section3 from './component/Section3';
import Section4 from './component/Section4';
import Section5 from './component/Section5';
import Section6 from './component/Section6';
import Footer from './component/Footer';
function App() {
  return (
    <div className='bg-black'>
     <Banner />
     <Section1 />
     <Section2 />
     <Section3 />
     <Section4 />
     <Section5 />
     <Section6 />
     <Footer />
    </div>
  );
}

export default App;
