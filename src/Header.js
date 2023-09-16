import "./main.css";
import React from "react";
import tglogo from "../public/img/tglogo.png";
import { useTelegram } from "../hooks/useTelegram";

function Header() {
  const { user } = useTelegram();

  return (
    <header>
      <div className="father">
        <p className="usercard">{user?.first_name}</p>

        <a href="https://t.me/zipperwear" className="btnurl">
          <div className="button-telegram-channel">
            <img src={tglogo} className="tglogo" />
            <p className="widget-text">zipper store</p>
            <p className="widget-text-low"> наш телеграм канал</p>
          </div>
        </a>
      </div>
    </header>
  );
}

export default Header;
