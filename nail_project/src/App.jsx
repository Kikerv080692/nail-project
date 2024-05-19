import Nav from "./components/Navigation/Nav.jsx";
import "./App.css";
import Footer from "./components/Contacts/Contacts.jsx";
import Header from "./components/Header/Header.jsx";
import Price from "./components/Price/Price.jsx";
import Nails from "./components/Nails/Nails.jsx";
import moment from "moment";
import Calendar from "./components/Calendar/Calendar.jsx";

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
  const startDay = moment().startOf("month").startOf("week");
  const endDay = moment().endOf("month").endOf("week");
  return (
    <>
      <Nav />
      <Header />
      <Nails />
      <Price />
      <Footer />
      <Calendar startDay={startDay} />
    </>
  );
}

export default App;
