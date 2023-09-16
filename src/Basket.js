import React, { useState } from "react";
import "./basket.css";
import productsData from "./productsData";
import { Link } from "react-router-dom";

const BasketItem = () => {
  const [addItem, setAddItem] = useState(productsData);

  const basket = addItem.map((product) => {
    return <></>;
  });

  return (
    <>
      <div className="catalog-head">
        <h2 className="catalog">Оплачивается</h2>
      </div>
      <div>Мы обязательно найдем ваш товар...</div>
    </>
  );
};

export default BasketItem;
