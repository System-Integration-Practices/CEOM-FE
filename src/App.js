import { Login } from "./component/login/Login";
import { toast, ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Home } from "./component/home/home";
import { NotFound } from "./component/404-not-found/NotFound";
import { jwtDecode } from "jwt-decode";
import { Create } from "./component/create/Create";
import { Update } from "./component/update/Update";
import { Detail } from "./component/detail/Detail";
function App() {
  const navigate = useNavigate();
  const [decodedToken, setDecodedToken] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));


  useEffect(() => {
    if (token) {
      decodeToken(token);
    } else {
      setDecodedToken(null);
    }
  }, [token]);

  useEffect(() => {
    console.log("Decoded token:", decodedToken);
  }, [decodedToken]);

  const decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      setDecodedToken(decoded);
    } catch (error) {
      console.error("Error decoding token:", error);
      setDecodedToken(null);
    }
  };


  const checkTokenExpiration = () => {
    if (!token) return false;
    // const { exp } = JSON.parse(atob(token.split(".")[1]));
    // return Date.now() < exp * 1000;
    return true;
  };

  useEffect(() => {
    if (checkTokenExpiration() && window.location.pathname === "/login") {
      toast.warning("Bạn đã đăng nhập!", { autoClose: 1500 });
      navigate('/home');
    }
  }, []);

  return (
    <>
      <Routes>
        {/* localStorage.getItem("roles").includes("ROLE_ADMIN") */}
        {/* <Route path="/login" element={<Login />}></Route>
        {decodedToken && decodedToken.roles && decodedToken.roles.includes("ROLE_ADMIN") && (
          <Route path="/home" element={localStorage.getItem('token') ? <Home /> : <Navigate to="/login" />} />
        )}

        <Route path="/*" element={localStorage.getItem('token') ? <NotFound /> : <Navigate to="/login" />}></Route> */}
{/* 
        <Route path="/login" element={<Login />}></Route>
        {localStorage.getItem('roles').includes("ROLE_ADMIN") && (
          <Route path="/home" element={localStorage.getItem('token') ? <Home /> : <Navigate to="/login" />} />
        ) && (
            <Route path="/create" element={localStorage.getItem('token') ? <Create /> : <Navigate to="/login" />} />
          )
        } */}

        {/* <Route path="/*" element={localStorage.getItem('token') ? <NotFound /> : <Navigate to="/login" />}></Route> */}

        <Route path="/home" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit-personal/:personalId/:employmentId" element={<Update />}></Route>
        <Route path="/detail-personal/:personalId/:employmentId" element={<Detail />}></Route>
      </Routes>
      <ToastContainer />

    </>
  )
}

export default App;
