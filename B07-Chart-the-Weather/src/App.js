import React, { useState } from "react";
import GeoForm from "./components/GeoForm";
import { Bar } from "react-chartjs-2";
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

// all things that deal with weather api and formatting/displaying weather data go into a component

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const labels = [
  [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return days[date.getDay()];
  }),
];

console.log(labels);

function WeatherChart() {
  return (
    <Bar
      options={{
        tooltips: { mode: "index", intersect: false },
        scales: {
          xAxes: [
            {
              gridLines: false,
              ticks: { fontColor: "#F680BC", fontSize: 10, padding: 20 },
            },
          ],
          yAxes: [
            {
              gridLines: false,
              ticks: { fontColor: "#F680BC", fontSize: 10, padding: 20 },
            },
          ],
        },
      }}
      data={{
        labels: ["Monday", "Tuesday", "Wednesday"],
        datasets: [
          {
            label: "Highs",
            backgroundColor: "#EC9CAC",
            borderColor: "#EC9CAC",
            data: [100, 200, 300],
          },
          {
            label: "Lows",
            backgroundColor: "#9CCAF6",
            borderColor: "#9CCAF6",
            data: [10, 20, 30],
          },
        ],
      }}
    />
  );
}
