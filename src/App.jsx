import React, { useState, useEffect } from 'react';
import Hero from './pages/Hero/Hero';
import About from './pages/About/About';
import Service from './pages/Service/Service';
import Info from './pages/Info/Info';
import Strategy from './pages/Strategy/Strategy';
import Seats from './pages/Seats/Seats';
import GetInTouch from './pages/GetInTouch/GetInTouch';
import Loader from './components/loader';
import Footer from './pages/Footer/Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period (e.g., data fetching)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3300); // Adjust duration as needed

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <>
          <Hero />
          <About />
          <Service />
          <Info />
          <Seats />
          <Strategy />
          <GetInTouch />
          <Footer/>
        </>
      )}
    </>
  );
};

export default App;
