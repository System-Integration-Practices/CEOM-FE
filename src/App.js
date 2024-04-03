import { Login } from "./component/login/Login";
import { toast, ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import 'react-toastify/dist/ReactToastify.css';
import { Home } from "./component/home/home";
import { NotFound } from "./component/404-not-found/NotFound";
function App() {
  const navigate = useNavigate();
  const roles = localStorage.getItem("roles");
  const token = localStorage.getItem("token");
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);

  const checkTokenExpiration = () => {
    // if (!token) return false;
    // const { exp } = JSON.parse(atob(token.split(".")[1]));
    // return Date.now() < exp * 1000;

    if (localStorage.getItem('token')) {
      return true;
    }
  };

  useEffect(() => {
    if (checkTokenExpiration() == true && window.location.pathname === "/login") {
      toast.warning("Bạn đã đăng nhập!", { autoClose: 1500 });
      navigate('/home');
    }
  }, [roles]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        {localStorage.getItem('roles').includes("ROLE_ADMIN") && (
          <Route path="/home" element={localStorage.getItem('token') ? <Home /> : <Navigate to="/login" />} />
        )}

        <Route path="/*" element={localStorage.getItem('token') ? <NotFound /> : <Navigate to="/login" />}></Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App;
