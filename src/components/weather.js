const weathercurr = ({ data }) => {
  return (
    <div className="weather">
      <div className="upper">
        <div className="location">
          <p>{data.city}</p>
        </div>
        <div className="temp">
          <h1>{Math.round(data.main.temp)}°C</h1>
          <img
            alt="weather"
            className="weathericon"
            src={`./icons/${data.weather[0].icon}.png`}
          ></img>
        </div>
        <div className="description">
          <p>{data.weather[0].description}</p>
        </div>
      </div>
      <div className="lower">
        <div className="feels">
          <p className="bold">{Math.round(data.main.feels_like)}°C</p>
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          <p className="bold">{data.main.humidity}%</p>
          <p>Humidity</p>
        </div>
        <div className="wind">
          <p className="bold">{Math.round(data.wind.speed)} NPH</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};
export default weathercurr;
