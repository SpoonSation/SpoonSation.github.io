import { useEffect, useRef } from "react";
import "../Services/Services.css";

export default function Services() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services">
      <div className="services__left">
        <span className="services__label">чем я занимаюсь</span>
        <h2>услуги</h2>
      </div>

      <div className="services__right">
        <div
          className="service fade-on-scroll"
          ref={(el) => (itemsRef.current[0] = el)}
        >
          <span className="service__number">01</span>
          <h3>брендинг</h3>
          <p>
            Разработка визуальной айдентики бренда: стиль, настроение,
            позиционирование и единый образ для всех носителей.
          </p>
        </div>

        <div
          className="service fade-on-scroll"
          ref={(el) => (itemsRef.current[1] = el)}
        >
          <span className="service__number">02</span>
          <h3>логотипы</h3>
          <p>
            Создание логотипов с характером — от концепции и смыслов до
            финальной формы и адаптаций.
          </p>
        </div>

        <div
          className="service fade-on-scroll"
          ref={(el) => (itemsRef.current[2] = el)}
        >
          <span className="service__number">03</span>
          <h3>полиграфия</h3>
          <p>
            Дизайн печатной продукции: визитки, упаковка, каталоги, постеры и
            другие носители бренда.
          </p>
        </div>
      </div>
    </section>
  );
}
