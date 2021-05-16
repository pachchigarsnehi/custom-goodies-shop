import React, { useState, useRef } from "react";

export default function Carousel(props) {
  const [index, setindex] = useState(0);
  console.log(props);

  let slides = useRef();

  if (Array.isArray(props.data) && props.data.length < 1) {
    return null;
  }
  slides = setTimeout(() => {
    if (index == props.data.length - 1) {
      setindex(0);
    } else {
      setindex(index + 1);
    }
  }, 2000);

  return (
    <div>
      <div
        style={{
          height: "300px",
          border: "solid black 1px",
          overflow: "hidden",
        }}
      >
        <img
          style={{ transition: "2s", left: 0, height: "100%" }}
          src={props.data[index]}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", height: "20px" }}
      >
        {props.data.map((item, i) => {
          return (
            <div
              onClick={() => {
                clearTimeout(slides.current);
                setindex(i);
              }}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "5px",
                margin: "10px",
                backgroundColor: index == i ? "red" : "blue",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
