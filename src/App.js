import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailsPage from "./Pages/DetailsPage";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element= {< DetailsPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
