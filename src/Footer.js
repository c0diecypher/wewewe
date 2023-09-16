import "./main.css";
import React from "react";

function Footer() {
  return (
    <footer>
      <p className="version">
        Сделать ленивую загрузку, чтобы картинки быстрее прогружались{" "}
      </p>
      <p className="version">Добавить корзину товаров</p>
      <p className="version">
        Перенести открытие поиска на главную страницу так кнопка лучше реагирует{" "}
      </p>

      <p className="version">App version 2.0 </p>
    </footer>
  );
}

export default Footer;
