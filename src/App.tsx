import "./App.css";
import Section from "./container/OtherSection";
import UserPage from "./container/User";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Navigate to="/user" replace />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/other" element={<Section />} />
      </Routes>
    </>
  );
}

export default App;
