import React, { useEffect } from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Props {
  location: string;
  setLocation: Function;
}

const WeatherDisplay = (props: Props) => {
  useEffect(() => {}, [props.location]);

  const { data, isLoading } = useQuery(["weather"], () => {
    return Axios.get(
      `http://api.weatherapi.com/v1/current.json?key=daacf3e8fade4f9fadf104744232203&q=${props.location}`
    ).then((res) => res.data);
  });

  if (isLoading) {
    return <h1>Page is Loading</h1>;
  } else {
    return (
      <div className="conatiner my-5 mx-5">
        <main className="grid">
          <div className="box">
            {data.location.name +
              ", " +
              data.location.region +
              ", " +
              data.location.country}
          </div>
          <div className="box">Time Zone: {data.location.tz_id}</div>
          <div className="box">{data.location.localtime}</div>
          <div className="box">
            {data.current.temp_c + " C/" + data.current.temp_f + " F"}
          </div>
          <div className="box">{data.current.is_day > 0 ? "Day" : "Night"}</div>
          <div className="box">
            {data.current.condition.text}{" "}
            <img src={data.current.condition.icon} alt="" />
          </div>
          <div className="box">
            Wind Speed- {data.current.wind_kph} kmph, Humidity-
            {data.current.humidity}
          </div>
        </main>
      </div>
    );
  }
};
export default WeatherDisplay;
