import "./Nav.scss";

function Nav() {
  return (
    <nav className="container-navigation">
      <h4>
        <a href="#about_me">Обо мне</a>
      </h4>
      <h4>
        <a href="#works">Мои работы</a>
      </h4>
      <h4>
        <a href="#price">Прайс</a>
      </h4>
      <h4>
        <a href="#contact">Контакты</a>
      </h4>
    </nav>
  );
}

export default Nav;
