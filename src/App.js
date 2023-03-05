import React, { useState } from "react";
import Search from "./components/search/search";
import Weathercurr from "./components/weather";
import Forcast from "./components/forcast/forcast";
import { current_Weather_Api, weather_Api_Key } from "./api";

function App() {
  const [weather, setWeather] = useState(null);
  const [forcast, setForcast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleOnSearchChange = async (searchData) => {
    setIsLoading(true);
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${current_Weather_Api}/weather?lat=${lat}&lon=${lon}&appid=${weather_Api_Key}&units=metric`
    );
    const WeatherForcastFetch = fetch(
      `${current_Weather_Api}/forecast?lat=${lat}&lon=${lon}&appid=${weather_Api_Key}&units=metric`
    );
    try {
      const response = await Promise.all([
        currentWeatherFetch,
        WeatherForcastFetch,
      ]);
      const currentWeatherResponse = await response[0].json();
      const forcastResponse = await response[1].json();
      setWeather({ city: searchData.label, ...currentWeatherResponse });
      setForcast({ city: searchData.label, ...forcastResponse });
    } catch (err) {
      setIsError(true);
    }

    setIsLoading(false);
  };
  console.log(weather);
  console.log(forcast);
  return (
    <div className="App">
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {weather && !isLoading && !isError && <Weathercurr data={weather} />}
        {!weather && (
          <div style={{ color: "black", fontWeight: "bold" }}>
            Please choose a country
          </div>
        )}
        {isLoading && <div>Loading...</div>}
        {isError && <div>An error occured, please</div>}
        {forcast && <Forcast data={forcast} />}
      </div>
    </div>
  );
}

export default App;
