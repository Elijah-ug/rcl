import React from "react";
import { ToastContainer } from "react-toastify";
import { NavBar } from "./app/components/NavBar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./app/pages/home/Home";
import { About } from "./app/pages/about/About";
import { Gallery } from "./app/pages/gallery/Gallery";
import { TableStandings } from "./app/pages/table/TableStandings";
import { Dinner } from "./app/pages/dinner/Dinner";
import { Footer } from "./app/components/Footer";
import { Authenticated } from "./app/pages/admin/Authenticated";
import { SignUp } from "./app/pages/admin/SignUp";
export const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <div className="grow">
        <NavBar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="admin-dashboard" element={<Authenticated />} />
            <Route path="table-standings" element={<TableStandings />} />
            <Route path="dinner" element={<Dinner />} />
            <Route path="gallery" element={<Gallery />} />

            {/* off pages */}
            <Route path="signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
};
