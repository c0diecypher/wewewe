import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import productsData from "./productsData";

import "./SelectSize.css";

function Swiperjs() {
  const { productId } = useParams();
  const thisProduct = productsData.find((prod) => prod.id === productId);

  const [active, setActive] = useState(thisProduct.sized);
  const Size = styled.button`
    width: 62px;
    height: 62px;
    cursor: pointer;
    opacity: 0.6;
    background: white;
    border-radius: 25px;
    border: 0;
    outline: 0;
    border: 2px solid transparent;

    ${({ active }) =>
      active &&
      `
    border: 2px solid blue;
    opacity: 1;
  `}
  `;

  return <></>;
}

export default Swiperjs;
