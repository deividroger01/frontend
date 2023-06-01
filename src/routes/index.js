import React, { useEffect, useContext } from "react";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";
import Home from "../components/Home";
import Login from "../components/Login";
import axios from "axios";

/*const Private = ({ Item }) => {
  const signed = true;

  return signed > 0 ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};*/

function RoutesApp() {
  const { user, setUser } = useContext(GlobalContext);
  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route
            exact
            path="/"
            element={user ? <Home user={user} /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="*"
            element={user ? <Home user={user} /> : <Navigate to="/login" />}
          />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default RoutesApp;
