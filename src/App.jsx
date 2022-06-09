import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { onWorkPage, LoadingPage, AboutMePage } from "./page";
import ContentWarp from "./components/warpper/ContentWarp";
import "./App.css";
import "csshake/dist/csshake.min.css";

export default function App() {
  const location = useLocation();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3003/").then((res) => {
        if (res.ok) {
          setSuccess(true);
        }
      });
    }, 3000);
  }, []);

  if (!success && location.pathname == "/") {
    return <LoadingPage />;
  }
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ContentWarp content={onWorkPage} />} />
        <Route
          path="/aboutme"
          element={<ContentWarp content={AboutMePage} />}
        />
      </Routes>
    </>
  );
}
