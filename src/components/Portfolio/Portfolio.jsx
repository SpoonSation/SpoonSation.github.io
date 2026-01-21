import { useState } from "react";
import "../Portfolio/Portfolio.css";

const works = {
  logos: [
    "/Portfolio/logos/accent.jpg",
    "/Portfolio/logos/beautiful.jpg",
    "/Portfolio/logos/sana.jpg",
    "/Portfolio/logos/trava.jpg",
  ],
  print: [
    "/Portfolio/print/create.jpg",
    "/Portfolio/print/lamination.jpg",
    "/Portfolio/print/list.jpg",
    "/Portfolio/print/rest.jpg",
  ],
};

export default function Portfolio() {
  const [active, setActive] = useState(null);

  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="portfolio__item" onClick={() => setActive("logos")}>
          <img src="Art\works\av.jpg" alt="Логотипы" />

          <div className="portfolio__overlay">
            <h3>логотипы</h3>
            <span>смотреть проекты</span>
          </div>
        </div>

        <div className="portfolio__item" onClick={() => setActive("print")}>
          <img src="Art\works\siberia.jpg" alt="Полиграфия" />

          <div className="portfolio__overlay">
            <h3>полиграфическая продукция</h3>
            <span>смотреть проекты</span>
          </div>
        </div>
      </section>

      {active && (
        <div className="modal" onClick={() => setActive(null)}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setActive(null)}>
              ✕
            </button>

            <h2>
              {active === "logos" ? "логотипы" : "полиграфическая продукция"}
            </h2>

            <div className="modal__grid">
              {works[active].map((src, index) => (
                <div className="modal__work" key={index}>
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
