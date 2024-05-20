import Nav from "./components/Navigation/Nav.jsx";
import "./App.css";
import Footer from "./components/Contacts/Contacts.jsx";
import Header from "./components/Header/Header.jsx";
import Price from "./components/Price/Price.jsx";
import Nails from "./components/Nails/Nails.jsx";
import moment from "moment";
import Calendar from "./components/Calendar/Calendar.jsx";
import { useState } from "react";

// console.log(moment())
// console.log(moment().startOf('month').startOf('week'))
// console.log(moment.updateLocale('en', {week: {dow: 1}} ))
// console.log(moment().startOf('month').startOf('week'))
// console.log(moment().endOf('month').endOf('week'))
// console.log(moment().add(1, 'day')) // добавляє один день
// console.log(moment().subtract(1, 'day')) // забирає один день
// console.log(startDay.format("YYYY-MM-DD"));
// console.log(endDay.format("YYYY-MM-DD"));

// const calendar = [];
// const day = startDay.clone();

// while (!day.isAfter(endDay)) {
//   console.log(day);
//   calendar.push(day.clone());
//   day.add(1, "day");
// }

function App() {
  const [today , setToday] = useState(moment())
  const startDay = today.clone().startOf("month").startOf("week");
  const endDay = moment().endOf("month").endOf("week");

  const prevHandlerDay = () => {
    console.log('prev')
    setToday((prev) => prev.clone().subtract(1, 'month'))
  }
  const todayHandlerDay = () => {
    console.log('today')
    setToday(moment())
    
  }
  const nextHandlerDay = () => {
    console.log('next')
    setToday((prev) => prev.clone().add(1, 'month'))
  }
  return (
    <>
      <Nav />
      <Header />
      <Nails />
      <Price />
      <Footer />
      <Calendar startDay={startDay} today={today} prevHandlerDay={prevHandlerDay} todayHandlerDay={todayHandlerDay} nextHandlerDay={nextHandlerDay} />
    </>
  );
}

export default App;
