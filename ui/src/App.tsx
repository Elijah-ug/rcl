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
import { Profile } from "./app/pages/admin/Profile";
import { AddTeam } from "./app/pages/admin/AddTeam";
import { AddPlayer } from "./app/pages/admin/AddPlayer";
import { UpdateMatchResults } from "./app/pages/admin/UpdateMatchResults";
import { CreateMatches } from "./app/pages/admin/CreateMatches";
import { AddNewsPost } from "./app/pages/admin/AddNewsPost";
import { Matches } from "./app/pages/matches/Matches";
import { Login } from "./app/pages/admin/Login";
import { AllMatches } from "./app/pages/admin/AllMatches";
import { EditMatch } from "./app/pages/admin/EditMatch";
import { PublishTable } from "./app/pages/admin/PublishTable";
import { Table } from "./app/pages/admin/Table";
export const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <div className="grow">
        <NavBar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            {/* admin dashboard */}
            <Route path="admin-dashboard" element={<Authenticated />}>
              <Route path="profile" element={<Profile />} />
              <Route path="add-team" element={<AddTeam />} />
              <Route path="register-players" element={<AddPlayer />} />
              <Route path="update-match-results" element={<UpdateMatchResults />} />
              <Route path="create-matches" element={<CreateMatches />} />
              <Route path="news" element={<AddNewsPost />} />
              <Route path="all-matches" element={<AllMatches />} />
              <Route path="all-matches/:match" element={<EditMatch />} />
              <Route path="publish-table" element={<PublishTable />} />
              <Route path="table" element={<Table />} />
            </Route>

            <Route path="table-standings" element={<TableStandings />} />
            <Route path="dinner" element={<Dinner />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="matches" element={<Matches />} />

            {/* off pages */}
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
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
