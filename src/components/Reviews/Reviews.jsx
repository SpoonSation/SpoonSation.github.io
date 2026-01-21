import { useState } from "react";
import "../Reviews/Reviews.css";

const reviews = [
  {
    text: "Кристина очень точно почувствовала стиль нашего бренда. Итоговый дизайн превзошёл ожидания и отлично работает в реальной среде.",
    author: "Анна Смирнова — бренд одежды",
  },
  {
    text: "Редко встречается такой баланс эстетики и функциональности. Проект был выполнен быстро и с большим вниманием к деталям.",
    author: "Иван Петров — стартап",
  },
  {
    text: "Работать было легко и приятно. Все правки вносились аккуратно, а результат получился цельным и современным.",
    author: "Мария Лебедева — маркетолог",
  },
  {
    text: "Дизайн получился минималистичным, но с характером. Именно то, что мы искали для обновления визуального образа.",
    author: "Алексей Кузнецов — креативный директор",
  },
  {
    text: "Очень профессиональный подход и отличное чувство композиции. Обязательно будем обращаться снова.",
    author: "Екатерина Волкова — предприниматель",
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const changeReview = (direction) => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      setIndex((prev) =>
        direction === "next"
          ? (prev + 1) % reviews.length
          : (prev - 1 + reviews.length) % reviews.length
      );
      setAnimating(false);
    }, 300);
  };

  return (
    <section id="reviews" className="reviews">
      <div className="reviews__container">
        <h2 className="reviews__title">отзывы клиентов</h2>

        <div className="reviews__wrapper">
          <button
            className="reviews__arrow"
            onClick={() => changeReview("prev")}
          >
            ←
          </button>

          <div
            className={`reviews__bubble ${animating ? "fade-out" : "fade-in"}`}
          >
            <p className="reviews__text">{reviews[index].text}</p>
            <span className="reviews__author">{reviews[index].author}</span>
            <div className="reviews__dots">
              {reviews.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>

          <button
            className="reviews__arrow"
            onClick={() => changeReview("next")}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
