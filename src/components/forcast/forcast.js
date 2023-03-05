import React from "react";
import "./forcastw.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Week_days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const forcast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forcastDays = Week_days.slice(dayInWeek, Week_days.length).concat(
    Week_days.slice(0, dayInWeek)
  );

  return (
    <>
      <label className="Tilte">Daily</label>

      <Accordion allowZeroExpanded className="allbox">
        {data.list.splice(0, 7).map((item, indx) => (
          <AccordionItem key={indx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    className="iconf"
                    src={`./icons/${item.weather[0].icon}.png`}
                    alt="weather"
                  />
                  <label className="day">{forcastDays[indx]}</label>
                  <label className="description-f">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-item">
                  <label>Pressure</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-item">
                  <label>Humidity</label>
                  <label>{item.main.humidity} %</label>
                </div>
                <div className="daily-details-item">
                  <label>Clouds</label>
                  <label>{item.clouds.all} %</label>
                </div>
                <div className="daily-details-item">
                  <label>Wind Speed</label>
                  <label>{Math.round(item.wind.speed)} m/s</label>
                </div>
                <div className="daily-details-item">
                  <label>Sea level</label>
                  <label>{item.main.sea_level}</label>
                </div>
                <div className="daily-details-item">
                  <label>Feels Like</label>
                  <label>{item.main.feels_like} °C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default forcast;
