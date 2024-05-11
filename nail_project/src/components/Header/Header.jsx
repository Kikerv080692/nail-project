import React from "react";
import './Header.scss'
import Button from "../Button/Button";


const Header = () => {
  return (
    <div>
      <h3>
        Делаю уникальный и аккуратный маникюр, придавая вашим ручкам красивый и
        ухоженный вид
      </h3>
      <Button className="custom-button">Записаться</Button>
    </div>
  );
};

export default Header;
