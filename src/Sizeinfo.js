import React from "react";
import "./main.css";
import { Link } from "react-router-dom";

function SizeInfo() {
  return (
    <div className="size">
      <p>Размер US </p>
      <Link to={`/size`}>
        <a>Размерная сетка</a>
      </Link>
    </div>
  );
}

export default SizeInfo;
