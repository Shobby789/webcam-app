import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import PhotoCapture from "./PhotoCapture";

export default function WebCam() {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  };

  const retake = () => {
    setImgSrc(null);
  };

  const downloadPhoto = () => {
    if (imgSrc) {
      // Create a temporary anchor element
      const anchor = document.createElement("a");
      anchor.href = imgSrc;
      anchor.download = "captured-photo.jpg"; // Set the desired file name
      document.querySelector(".photoCapture").appendChild(anchor);

      // Trigger a click event on the anchor element to initiate the download
      anchor.click();

      // Remove the anchor element from the DOM
      document.querySelector(".photoCapture").removeChild(anchor);
    }
  };

  return (
    <div className="camperaView">
      <div className="webcam">
        <Webcam
          height={"100%"}
          width={"100%"}
          ref={webcamRef}
          mirrored={true}
          screenshotFormat="image/jpeg"
          screenshotQuality={0.8}
        />
        <div className="btns">
          <button className="btnPhoto" onClick={capture}>
            Capture Photo
          </button>
          <button className="btnPhoto" onClick={retake}>
            Retake
          </button>
        </div>
      </div>
      <div className="photoCapture">
        {imgSrc ? (
          <>
            <PhotoCapture imgSrc={imgSrc} />
            <button className="downloadBtn" onClick={downloadPhoto}>Download Photo</button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
