import  { useEffect } from 'react';
import Landing from './components/Landing';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import Profilee from './components/Profilee';
import Email from './components/Email';



function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
 
    <div className='w-full min-h-screen bg-zinc-900 text-white overflow-hidden'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
   <Profilee/>
      <Cards /> 
      <Email/>   
      <Footer /> 
    
    </div>

  );
}

export default App;
