import React from "react";
import Timer from "../timer/Timer";
import "../timer.css";

const TimerList = (props) => (
  <div className="timer-list">
    {props.timers.map((timer) => (
      <Timer key = {timer.id} {...timer}
      timerName = {timer.timerName}
      handleDeleteTimer = {props.handleDeleteTimer}
      id = {timer.id}
       />
    ))}
  </div>
);

export default TimerList;
