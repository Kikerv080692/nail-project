import React from "react";
import "./Header.scss";
import Button from "../Button/Button";
import nail from "../../images/nail.jpg";

const Header = () => {
  return (
    <div className="container-header">
      {/* <div className="star"></div> */}
      <div className="header-img">
        <img src={nail} alt="" />
      </div>
      <div className="header-img-text">
        <h2>
          Nails <br />
          with love
        </h2>
      </div>
      <div className="header-text">
        <h3>
          Делаю уникальный и аккуратный маникюр, придавая вашим ручкам красивый
          и ухоженный вид
        </h3>
      </div>
      <div className="custom-button-box">
        <Button className="custom-button">Записаться</Button>
      </div>
    </div>
  );
};

export default Header;
