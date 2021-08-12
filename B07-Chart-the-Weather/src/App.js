import React, { useState } from "react";
import "./App.css";

// openweathermap.org
// https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,minutely&units=imperial&appid=bb96c7f9ac6f57dc00333727c5407547
// api key: bb96c7f9ac6f57dc00333727c5407547

// google maps api
// api key: AIzaSyDp4os33WF6-4d-xFVyL0HsUUHN7dOml_w

export default function App() {
  const [latLng, setLatLng] = useState(null);

  // 1. have a form. type in a city
  // 2. hit the google maps geocoding api. convert city to lat + long
  // 3. pass lat + long to the weather api. get weather data
  // 4. format it for our chart
  // 5. display

  return (
    <div className="app">
      {/* form goes here */}
      <GeoForm setLatLng={setLatLng} />

      {/* chart goes here */}
      {latLng && <WeatherChart latLng={latLng} />}
    </div>
  );
}

// all things with address + lat+long go into a component

// all things that deal with weather api and formatting/displaying weather data go into a component
