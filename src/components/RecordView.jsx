import React, { useState } from "react";
import {
  ReactMediaRecorder,
  useReactMediaRecorder,
} from "react-media-recorder";

export default function RecordView() {
  const [showVideo, setShowVideo] = useState(false);
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });

  const recordingStart = () => {
    startRecording();
    setTimeout(() => {
      alert("Recording started");
    }, 300);
  };
  const recordingStop = () => {
    stopRecording();
    setTimeout(() => {
      alert("Recording stopped");
      setShowVideo(true);
    }, 300);
  };
  return (
    <div>
      <button className="startButtons" onClick={recordingStart}>
        Start Recording
      </button>
      <button className="startButtons" onClick={recordingStop}>
        Stop Recording
      </button>
      {showVideo && <video src={mediaBlobUrl} autoPlay controls />}
      {/* <p>{status}</p> */}
    </div>
  );
}
