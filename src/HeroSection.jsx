import React, { useState, useEffect } from 'react';

 const HeroSection = () => {
  const cities = [
    'New York', 'Tokyo', 'Paris', 'Sydney', 'Mumbai', 
    'London', 'Berlin', 'Dubai', 'Singapore', 'Rome', 
    'Bangkok', 'Toronto', 'San Francisco', 'Hong Kong', 'Seoul',
    'Los Angeles', 'Barcelona', 'Amsterdam', 'Cape Town', 'Rio de Janeiro'
  ];

  const [currentCity, setCurrentCity] = useState(cities[0]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCity(prevCity => {
        const currentIndex = cities.indexOf(prevCity);
        const nextIndex = (currentIndex + 1) % cities.length;
        return cities[nextIndex];
      });
    }, 1000); 

    return () => clearInterval(intervalId);
  }, [cities]);

  return (
    <>
      <div id="travelImageContainer">
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: "200px",
            left: "250px",
            bottom: "0px",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "20px"
          }}
        >
          <h1 className="text-warning">
            Welcome to  
            <span> <i class="bi bi-globe"></i></span>
             <span> MY TOURS</span> 
          </h1>
          <h2 id="changingText">Visit {currentCity}</h2>
          <button className="btn text-white me-2" type="submit">
            Book Now
          </button>
        </div>
        <img src="travels.jpg" alt="travel image" style={{ height: '500px' }} />
      </div>
    </>
  );
}

export default HeroSection
