import "./Stories.css";
import React from "react";
import "swiper/css";

function Stories() {
  return (
    <div className="Stories-box">
      <button className="Stories">
        <span className="Stories-item">
          <svg
            width="103"
            height="103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63 0c18.856 0 28.284 0 34.142 5.858C103 11.716 103 21.144 103 40v23c0 18.856 0 28.284-5.858 34.142C91.284 103 81.856 103 63 103H40c-18.856 0-28.284 0-34.142-5.858C0 91.284 0 81.856 0 63V40C0 21.144 0 11.716 5.858 5.858 11.716 0 21.144 0 40 0Zm1 1c17.913 0 26.87 0 32.435 5.565C102 12.13 102 21.087 102 39v25c0 17.913 0 26.87-5.565 32.435C90.87 102 81.913 102 64 102H39c-17.913 0-26.87 0-32.435-5.565C1 90.87 1 81.913 1 64V39C1 21.087 1 12.13 6.565 6.565 12.13 1 21.087 1 39 1Z"
              fill="url(#outline_svg__a)"
              fill-rule="evenodd"
            ></path>
            <defs>
              <radialGradient
                id="outline_svg__a"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(86.81435 -94.74057 100.69038 92.26638 7.063 86.481)"
              >
                <stop stop-color="#EB9C00"></stop>
                <stop offset="0.271" stop-color="#FF4769"></stop>
                <stop offset="0.664" stop-color="#3D50FF"></stop>
                <stop offset="1" stop-color="#00B3FF"></stop>
              </radialGradient>
            </defs>
          </svg>
        </span>
        <div
          className="Story-item-content"
          style={{
            background:
              "linear-gradient(rgb(124, 255, 58) 0%, rgb(99, 204, 46) 100%)"
          }}
        >
          <div className="Story-item-image">
            <img draggable="false" />
          </div>
          <div class="Story-item-title">Зови друзей! +500₽ </div>
        </div>
      </button>

      <button className="Stories">
        <span className="Stories-item">
          <svg
            width="103"
            height="103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63 0c18.856 0 28.284 0 34.142 5.858C103 11.716 103 21.144 103 40v23c0 18.856 0 28.284-5.858 34.142C91.284 103 81.856 103 63 103H40c-18.856 0-28.284 0-34.142-5.858C0 91.284 0 81.856 0 63V40C0 21.144 0 11.716 5.858 5.858 11.716 0 21.144 0 40 0Zm1 1c17.913 0 26.87 0 32.435 5.565C102 12.13 102 21.087 102 39v25c0 17.913 0 26.87-5.565 32.435C90.87 102 81.913 102 64 102H39c-17.913 0-26.87 0-32.435-5.565C1 90.87 1 81.913 1 64V39C1 21.087 1 12.13 6.565 6.565 12.13 1 21.087 1 39 1Z"
              fill="url(#outline_svg__a)"
              fill-rule="evenodd"
            ></path>
            <defs>
              <radialGradient
                id="outline_svg__a"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(86.81435 -94.74057 100.69038 92.26638 7.063 86.481)"
              >
                <stop stop-color="#EB9C00"></stop>
                <stop offset="0.271" stop-color="#FF4769"></stop>
                <stop offset="0.664" stop-color="#3D50FF"></stop>
                <stop offset="1" stop-color="#00B3FF"></stop>
              </radialGradient>
            </defs>
          </svg>
        </span>
        <div
          className="Story-item-content"
          style={{
            background:
              "linear-gradient(rgb(34, 39, 40) 0%, rgb(20,20,20) 100%)"
          }}
        >
          <div className="Story-item-image">
            <img draggable="false" />
          </div>
          <div className="Story-item-title" style={{ color: "#FF97BB" }}>
            Доставка{""}
          </div>
        </div>
      </button>

      <button className="Stories">
        <span className="Stories-item">
          <svg
            width="103"
            height="103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63 0c18.856 0 28.284 0 34.142 5.858C103 11.716 103 21.144 103 40v23c0 18.856 0 28.284-5.858 34.142C91.284 103 81.856 103 63 103H40c-18.856 0-28.284 0-34.142-5.858C0 91.284 0 81.856 0 63V40C0 21.144 0 11.716 5.858 5.858 11.716 0 21.144 0 40 0Zm1 1c17.913 0 26.87 0 32.435 5.565C102 12.13 102 21.087 102 39v25c0 17.913 0 26.87-5.565 32.435C90.87 102 81.913 102 64 102H39c-17.913 0-26.87 0-32.435-5.565C1 90.87 1 81.913 1 64V39C1 21.087 1 12.13 6.565 6.565 12.13 1 21.087 1 39 1Z"
              fill="url(#outline_svg__a)"
              fill-rule="evenodd"
            ></path>
            <defs>
              <radialGradient
                id="outline_svg__a"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(86.81435 -94.74057 100.69038 92.26638 7.063 86.481)"
              >
                <stop stop-color="#EB9C00"></stop>
                <stop offset="0.271" stop-color="#FF4769"></stop>
                <stop offset="0.664" stop-color="#3D50FF"></stop>
                <stop offset="1" stop-color="#00B3FF"></stop>
              </radialGradient>
            </defs>
          </svg>
        </span>
        <div
          className="Story-item-content"
          style={{
            background:
              "linear-gradient(rgb(65,105,225) 0%, rgb(52,84,180) 100%)"
          }}
        >
          <div className="Story-item-image">
            <img draggable="false" />
          </div>
          <div className="Story-item-title" style={{ color: "white" }}>
            Что умеет Zipper Store?
          </div>
        </div>
      </button>

      <button className="Stories">
        <span className="Stories-item">
          <svg
            width="103"
            height="103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63 0c18.856 0 28.284 0 34.142 5.858C103 11.716 103 21.144 103 40v23c0 18.856 0 28.284-5.858 34.142C91.284 103 81.856 103 63 103H40c-18.856 0-28.284 0-34.142-5.858C0 91.284 0 81.856 0 63V40C0 21.144 0 11.716 5.858 5.858 11.716 0 21.144 0 40 0Zm1 1c17.913 0 26.87 0 32.435 5.565C102 12.13 102 21.087 102 39v25c0 17.913 0 26.87-5.565 32.435C90.87 102 81.913 102 64 102H39c-17.913 0-26.87 0-32.435-5.565C1 90.87 1 81.913 1 64V39C1 21.087 1 12.13 6.565 6.565 12.13 1 21.087 1 39 1Z"
              fill="url(#outline_svg__a)"
              fill-rule="evenodd"
            ></path>
            <defs>
              <radialGradient
                id="outline_svg__a"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(86.81435 -94.74057 100.69038 92.26638 7.063 86.481)"
              >
                <stop stop-color="#EB9C00"></stop>
                <stop offset="0.271" stop-color="#FF4769"></stop>
                <stop offset="0.664" stop-color="#3D50FF"></stop>
                <stop offset="1" stop-color="#00B3FF"></stop>
              </radialGradient>
            </defs>
          </svg>
        </span>
        <div
          className="Story-item-content"
          style={{
            background:
              "linear-gradient(rgb(220,220,220) 0%, rgb(176,176,176) 100%)"
          }}
        >
          <div className="Story-item-image">
            <img draggable="false" />
          </div>
          <div className="Story-item-title" style={{ color: "black" }}>
            Как выбрать размер правильно
          </div>
        </div>
      </button>
    </div>
  );
}

export default Stories;
