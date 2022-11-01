import './App.css';
import { Fragment } from 'react';
import Hero from './Component/Hero/Hero';
import Program from './Component/porgrams/Program'
import Reasons from './Component/SomeReasons/Reasons';
import Plans from './Component/Plans/Plans';
import Testimonials from './Component/Testimonials/Testimonials';
import Join from './Component/Join/Join';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
