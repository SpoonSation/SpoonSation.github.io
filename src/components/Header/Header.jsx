import "../Header/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__photo">
          <img src="/Art/me.jpg" alt="Кристина дизайнер" />
        </div>
        <span className="header__name">
          Кристина <br />
          <span>дизайнер</span>
        </span>
      </div>

      <nav className="header__nav">
        <a href="#main">Главная</a>
        <a href="#about">Обо мне</a>
        <a href="#services">Услуги</a>
        <a href="#portfolio">Портфолио</a>
        <a href="#reviews">Отзывы</a>
        <a href="#contacts">Контакты</a>
      </nav>

      <a href="#contacts" className="header__btn">
        заказать дизайн
      </a>
    </header>
  );
}
