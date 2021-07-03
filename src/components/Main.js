import React, { useEffect } from "react";
import Header from "./Header";
import Maincard from "./Maincard";
import Forecast from "./Forecast";
import { useState } from "react";

const Main = () => {
  const [location, setLocation] = useState("Warri");
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    initializeWeatherData();
  }, [location]);

  function initializeWeatherData() {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=9f3dbd0a12ba42d182093906210207&q=${location}&days=7&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      });
  }

  if (!("current" in weatherData)) {
    return (
      <main className='main'>
        <div className='main-content'>
          <Header
            onSubmit={(e) => {
              e.preventDefault();
              if (!e.currentTarget.search.value) {
                return;
              }
              setLocation(e.currentTarget.search.value);
            }}
          />
          <h4 className='mt-5 px-5'>Oops! No results available</h4>
        </div>
      </main>
    );
  }

  return (
    <main className='main'>
      <div className='main-content'>
        <Header
          onSubmit={(e) => {
            e.preventDefault();
            if (!e.currentTarget.search.value) {
              return;
            }
            setLocation(e.currentTarget.search.value);
          }}
        />
        <Maincard weatherInfo={weatherData} />
        <Forecast forecastDays={weatherData.forecast.forecastday} />
      </div>
    </main>
  );
};

export default Main;
