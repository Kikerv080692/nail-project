import React from "react";
import "./MonitorCalendar.scss";
// import styled from "styled-components";

// const GridWrapper = styled.div `
//      display: grid;
//     grid-template-columns: repeat(7, 1fr);
//     grid-template-rows: repeat(6, 1fr);
//     gap: 10px;
//     padding: 20px 20px;
// `

function MonitorCalendar({ startDay }) {
  const totalDays = 42;
  const day = startDay.clone();
  const daysArray = [
    ...Array(totalDays)
      .keys()
      .map(() => {
        return day.add(1, "day").clone();
      }),
  ];

  return (
    <>
      {/* <h1>Monitor</h1> */}
      <div className="container-grid">
        {daysArray.map((day, index) => {
          const isWeekend = day.day() === 0 || day.day() === 6;
          return (
            <div
              className={isWeekend ? 'cell-weekend ': 'cell-wrapper'}
              key={index}
            >
              <div className="row-in-cell">
                <div className="day-wrapper">{day.format("D")}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MonitorCalendar;
