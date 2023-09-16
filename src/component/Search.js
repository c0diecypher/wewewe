import "./Search.css";
import React, { useState, useEffect } from "react";
import productsData from "../productsData";
import { Link } from "react-router-dom";

const filterItem = (searchText, listOfItems) => {
  if (!searchText) {
    return listOfItems;
  }
  return listOfItems.filter(({ name }) =>
    name.toLowerCase().includes(searchText.toLowerCase())
  );
};

function Search() {
  const [itemList, setItemList] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredItem = filterItem(searchTerm, productsData);
      setItemList(filteredItem);
    }, 200);
    return () => clearTimeout(Debounce);
  });

  return (
    <div class="wrapper__form__container">
      <div class="wrapper__form__container_input_">
        <div className="wrapper__form__container_background_"></div>
        <div className="wrapper__form__container_icon_">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="tabler-icon tabler-icon-search"
          >
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>
        </div>
        <input
          type="text"
          enterkeyhint="search"
          placeholder="Найти"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        {itemList.map((product) => {
          return (
            <p>
              <hr className="hr-line" />
              <Link to={`/products/${product.id}`}>
                <a key={product.id}>{product.name}</a>
              </Link>
            </p>
          );
        })}
      </div>
      <hr className="hr-line" />
    </div>
  );
}

export default Search;
