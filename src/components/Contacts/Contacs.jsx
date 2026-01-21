import { FaInstagram, FaTelegramPlane, FaVk } from "react-icons/fa";
import "../Contacts/Contacts.css";

export default function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <div className="contacts__container">
        <span className="contacts__label">как со мной связаться</span>
        <h2>чтобы обсудить проект</h2>

        <div className="contacts__grid">
          <a
            href="https://www.instagram.com/0tintararan0?igsh=MTV5Y2ozc254bHdmZw=="
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>

          <a
            href="https://vk.ru/id530886578"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
          >
            <FaVk />
            <span>VKontakte</span>
          </a>

          <a
            href="https://t.me/Kuyanovakristina"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
          >
            <FaTelegramPlane />
            <span>Telegram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
