import { Login } from "./component/login/Login";
import { toast, ToastContainer } from "react-toastify";
import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./component/home/home";
import { NotFound } from "./component/404-not-found/NotFound";
import HomePage from "./pages/HomePage";
function App() {
  const navigate = useNavigate();
  const roles = localStorage.getItem("roles");
  const token = localStorage.getItem("token");
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);

  const checkTokenExpiration = () => {
    // if (!token) return false;
    // const { exp } = JSON.parse(atob(token.split(".")[1]));
    // return Date.now() < exp * 1000;
  };

  useEffect(() => {
    if (checkTokenExpiration() && window.location.pathname === "/login") {
      toast.warning("Bạn đã đăng nhập!", { autoClose: 1000 });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [roles]);
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 2500,
      delay: 400,
    });

    sr.reveal(`.footer .row`, {
      origin: "left",
      interval: 100,
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
