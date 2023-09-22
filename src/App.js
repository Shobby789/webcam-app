import { useState } from "react";
import "./App.css";
import RecordView from "./components/RecordView";
import WebCam from "./components/WebCam";
import { Route, Routes, useNavigate } from "react-router-dom";
import Start from "./components/Start";

export default function App() {
  const navigate = useNavigate();
  const [showBtns, setShowBtns] = useState(true);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/capture-photo" element={<WebCam />} />
        <Route path="/record-video" element={<RecordView />} />
      </Routes>
    </div>
  );
}
