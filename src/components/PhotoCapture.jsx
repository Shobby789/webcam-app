import React from "react";

export default function PhotoCapture({ imgSrc }) {
  return (
    <div className="photoCapture">
      <img src={imgSrc} alt="" className="photo"/>
    </div>
  );
}
