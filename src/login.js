import React, { useState, useEffect } from "react";
import logo from "./img/logo.png";
import LogNav from "./Nav2";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import "./login.css";

const accessData = [
  {
    username: "ADMIDOC",
    password: bcrypt.hashSync("HEAL", 10),
    redirectPath: "/admin",
  },
  {
    username: "ADMINURSE",
    password: bcrypt.hashSync("ENTER", 10),
    redirectPath: "/admiNURSE",
  },
  {
    username: "0ADMIN0",
    password: bcrypt.hashSync("super@password", 10),
    redirectPath: "/superadmin",
  },
];

function Login() {

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Login - Mediku";
    return () => {
      document.title = previousTitle;
    };
  }, []);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ id: "", pass: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const MAX_STORAGE_SIZE = 5000;

const checkStorageUsage = () => {
  let totalSize = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    totalSize += key.length + value.length;
  }
  return totalSize;
};

const removeOldEntries = () => {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i));
  }
  keys.sort();
  while (checkStorageUsage() > MAX_STORAGE_SIZE && keys.length > 0) {
    const oldestKey = keys.shift();
    localStorage.removeItem(oldestKey);
  }
};

const storeData = (key, data) => {
  removeOldEntries();
  localStorage.setItem(key, JSON.stringify(data));
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = accessData.find((user) => user.username === formData.id);
    const data = {
      username: "exampleUser",
      role: "admin",
    };

    if (user && bcrypt.compareSync(formData.pass, user.password)) {
      localStorage.setItem('userRole', user.redirectPath);
      navigate(user.redirectPath);
    } else {
      setErrorMessage("Invalid username or password");
    }
    storeData('userData', data);
  };

  return (
    <div className="plogin">
      <LogNav />
      <div className="page">
        <div className="form-container">
          <img src={logo} className="form-logo" alt="Logo" />
          <h2>Welcome to MEDIKU</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="id"
              className="inbox"
              placeholder="ID / Email"
              value={formData.id}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              id="pass"
              className="inbox"
              placeholder="Password"
              value={formData.pass}
              onChange={handleChange}
              required
            />
            <a className="forgot" href="#">
              Forgot password ?
            </a>
            <button type="submit" id="sub-btn" className="form-button">
              Login
            </button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
      <footer> <span style={{color: "black"}}>Empowered by ZeroX © All Rights Reserved 2025.</span></footer>
    </div>
  );
}

export default Login;
