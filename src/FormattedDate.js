import React from "react";

export default function FormattedDate(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let currentDate = props.date.getDate();
  if (currentDate < 10) {
    currentDate = `0${currentDate}`;
  }
  let month = props.date.getMonth();
  if (month < 10) {
    month = `0${month}`;
  }
  let year = props.date.getFullYear();
  return (
    <div>
      {day}, {currentDate}/{month}/{year}, {hours}:{minutes}
    </div>
  );
}
