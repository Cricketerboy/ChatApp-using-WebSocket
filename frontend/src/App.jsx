import React, { useState } from "react";
import Left from "./home/Leftpart/Left";
import Right from "./home/Rightpart/Right";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import Logout from "./home/left1/Logout";
import { Navigate, Route, Routes } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

function App() {
  const [authUser] = useAuth();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen relative">
                <Logout />

                {/* Drawer Toggle Button for Mobile */}
                <button
                  className="md:hidden absolute left-5 top-5 text-white text-2xl z-10"
                  onClick={() => setIsDrawerOpen(true)}
                >
                  <CiMenuFries />
                </button>

                {/* Sidebar (Left Part) */}
                <Left isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />

                {/* Chat Window (Right Part) */}
                <div className="flex-1">
                  <Right isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
