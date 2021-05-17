import React, { useState, useRef, useEffect } from "react";

export default function Carousel(props) {
  const [index, setindex] = useState(0);
  console.log(props);

  let slides = useRef(null);


  const runnext = () => {

    slides.current = setTimeout(() => {
      if (index == props.data.length - 1) {
        setindex(0);
      } else {
        setindex(index + 1);
      }
    }, 2000);
  }
  useEffect(() => {
    runnext()
  }, [index])
  return (
    <div>
      <div
      className='carousel'
        style={{
         
          overflow: "hidden",
        }}
      >
        <img
          style={{height: "100%" }}
          src={props.data[index]}
        />
        <div
          style={{ display: "flex", justifyContent: "center", height: "20px",position:'absolute',left:1,right:1,marginTop:'-40px' }}
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
                  backgroundColor: index == i ? "black" : "grey",
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
