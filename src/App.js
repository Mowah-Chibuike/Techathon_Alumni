import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SharedLayout from "./Component/Layout/SharedLayout/SharedLayout";
import Home from "./Component/Layout/Homepage/Home";
import SignIn from "./Component/Layout/SignIn/SignIn";
import SignUp from "./Component/Layout/Signup/SignUp";
import AuthContext from "./Component/Helper/auth-context/AuthContext";
import Dashboard from "./Component/Layout/Dashboard/Dashboard";
import ProtectedRoutes from "./Component/Helper/ProtectedRoute/ProtectedRoute";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const isUserLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (isUserLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);
  const handleLogin = () => {
    sessionStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: handleLogin,
        onLogout: handleLogout,
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={"/register"} element={<SignUp />} />
          <Route path={"/login"} element={<SignIn />} />
          <Route element={<ProtectedRoutes />}>
            <Route path={"/dashboard"} element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
