import "../Main/main.css";

export default function Main() {
  return (
    <section id="main" className="main">
      <div className="main__image">
        {<img src="Art\me.jpg" alt="Kristina designer" />}
      </div>

      <div className="main__content">
        <h1 className="fade-up delay-1">
          портфолио <br />
          дизайнера
        </h1>
        <p className="fade-up delay-2">самые стильные дизайны</p>
      </div>
    </section>
  );
}
