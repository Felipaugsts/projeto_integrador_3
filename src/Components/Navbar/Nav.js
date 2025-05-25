import React, { useEffect } from "react";
import "./Nav.css";
import auth from "../../Assets/images/auth.gif";
import logout from "../../Assets/Icons/logout.gif";
import { Link } from "react-router-dom";
import { axios } from 'axios'
import { setUserActive, uid, setLogoutUser } from "../../Model/userSlice";
import { useDispatch, useSelector } from "react-redux";
import add from "../../Assets/Icons/add.gif";

const Nav = () => {
  const dispatch = useDispatch();
  const userUID = useSelector(uid);

  const handleSignOut = () => {
    axios.post('https://localhost:3000/logout').then((res) => { 
      dispatch(setLogoutUser());
    })
  };

  return (
    <div className="navigationbar shadow ">
      <div className="nav-items">
        <Link to={"/"} className="xlarge link orange heavy">
          AjudaDev
        </Link>
        <Link to={"/login"}>
            <img className="icon" src={auth} alt="auth" />
          </Link>
      </div>
    </div>
  );
};
export default Nav;
