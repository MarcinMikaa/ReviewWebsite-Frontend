import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AdminNav from "../AdminNav/AdminNav";
import axios from "axios";
import { useEffect } from "react";

function LoggedUserNav() {
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      localStorage.setItem("role", res.data.isAdmin);
      localStorage.setItem("username", res.data.username);
    });
  });

  const logout = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/logout",
    }).then((res) => {
      localStorage.clear();
      navigate("/");
      window.location.reload();
    });
  };

  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

  return (
    <Nav>
      {user.isAdmin && <AdminNav />}
      <Nav.Link onClick={logout}>
        <p>Logout</p>
      </Nav.Link>
    </Nav>
  );
}

export default LoggedUserNav;
