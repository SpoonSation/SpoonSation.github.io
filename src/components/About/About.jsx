import { useEffect, useRef } from "react";
import "../About/About.css";

export default function About() {
  const textRef = useRef([]);

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

    textRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      {/* Левая часть */}
      <div className="about__text">
        <span className="about__label">совсем немножко</span>
        <h2>обо мне</h2>

        <p ref={(el) => (textRef.current[0] = el)} className="fade-on-scroll">
          Я дизайнер с вниманием к деталям, форме и смыслу. Для меня важно,
          чтобы дизайн не просто выглядел красиво, а работал и вызывал эмоции.
        </p>

        <p ref={(el) => (textRef.current[1] = el)} className="fade-on-scroll">
          В своих проектах я стремлюсь к балансу между эстетикой и
          функциональностью, создавая визуальные решения, которые остаются
          актуальными со временем.
        </p>
      </div>

      {/* Правая часть */}
      <div className="about__grid">
        <div className="grid__item image">
          {<img src="Art\meabout1.jpg" alt="Kristina designer" />}
        </div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item image">
          {<img src="Art\meabout2.jpg" alt="Kristina designer" />}
        </div>
      </div>
    </section>
  );
}
