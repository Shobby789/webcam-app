import React from "react";
import { useNavigate } from "react-router-dom";

export default function Start() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="startButtons"
        onClick={() => navigate("/capture-photo")}
      >
        Capture Photo
      </button>
      <button
        className="startButtons"
        onClick={() => navigate("/record-video")}
      >
        Record video
      </button>
    </div>
  );
}
