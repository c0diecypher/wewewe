import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "./productsData";
import "./Product.css";
import SizeInfo from "./Sizeinfo";
import "./SelectSize.css";
import styled from "styled-components";
import { useTelegram } from "../hooks/useTelegram";

const Size = styled.button`
  width: 62px;
  height: 62px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border-radius: 25px;
  border: 0;
  outline: 0;
  border: 2px solid #e3e3e3;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  color: #ff0000;

  ${({ active }) =>
    active &&
    `
    border: 2px solid #6b6b6b;
    opacity: 1;
    
  `}
`;

function ProductDetail() {
  const { productId } = useParams();
  const thisProduct = productsData.find((prod) => prod.id === productId);

  const [active, setActive] = useState(thisProduct.size[9]);
  const typesKeys = Object.entries(thisProduct.size);
  const { tg } = useTelegram();
  const [addedItems, setAddedItems] = useState([]);
  const onAdd = (productsData) => {
    const AllreadyAdded = productsData.find(
      (item) => item.id !== productsData.id
    );
    let newItems = [];

    if (AllreadyAdded) {
      newItems = productsData.filter((item) => item.id !== productsData.id);
    } else {
      newItems = [...addedItems, productsData];
    }
    setAddedItems(newItems);

    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Перейти к оплате ${active}₽`,
        color: `#e4e4e4`
      });
    }
  };
  const onAddHandler = () => {
    onAdd(productsData);
  };

  return (
    <nav className="full-item">
      <div>
        <img src={"/img/" + thisProduct.img} alt="" />
        <h4 className="full-item-name">{thisProduct.name}</h4>

        <p className="full-item-price">{active}₽</p>

        <hr className="hr-line" />
        <SizeInfo />

        <div className="size_box">
          {typesKeys.map((item) => (
            <button className="size_button">
              <Size
                key={item}
                active={active === item[1]}
                onClick={() => setActive(item[1])}
              >
                <div className="Story-size-content" onClick={onAddHandler}>
                  {item[0]}
                </div>
              </Size>
            </button>
          ))}
        </div>
        <hr className="hr-line" />
      </div>
    </nav>
  );
}

export default ProductDetail;
