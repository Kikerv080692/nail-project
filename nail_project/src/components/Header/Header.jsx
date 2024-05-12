import React from "react";
import './Header.scss'
import Button from "../Button/Button";
import nail from '../../images/nail.jpg'

const Header = () => {
  return (
    <div className="container-header">
      <h3>
        <div className="header-img">
        <img src={nail} alt="" />
        </div>
        Делаю уникальный и аккуратный маникюр, придавая вашим ручкам красивый и
        ухоженный вид
      </h3>
      <Button className="custom-button">Записаться</Button>
    </div>
  );
};

export default Header;
