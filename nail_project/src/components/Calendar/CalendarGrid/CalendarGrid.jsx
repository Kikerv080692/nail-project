import React from "react";
import "./CalendarGrid.scss";
import moment from "moment";

// import styled from "styled-components";

// const GridWrapper = styled.div `
//      display: grid;
//     grid-template-columns: repeat(7, 1fr);
//     grid-template-rows: repeat(6, 1fr);
//     gap: 10px;
//     padding: 20px 20px;
// `

function CalendarGrid({ startDay }) {
  const totalDays = 42;
  const day = startDay.clone();
  const daysArray = [
    ...Array(totalDays)
      .keys()
      .map(() => {
        return day.add(1, "day").clone();
      }),
  ];

  const isCurrentDay = (day) => moment().isSame(day, 'day');

  return (
   
      <div className="container-grid">
        {daysArray.map((dayItem, index) => {
          const isWeekend = dayItem.day() === 0 || dayItem.day() === 6;
          return (
            <div
              className={isWeekend ? "cell-weekend " : "cell-wrapper"}
              key={dayItem.unix()}
            >
              <div className="row-in-cell">
                <div className="day-wrapper">
                  {!isCurrentDay(dayItem) && dayItem.format('D') }
                  {isCurrentDay(dayItem) && <div className="current-day">{dayItem.format("D")}</div>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
   
  );
}

export default CalendarGrid;
