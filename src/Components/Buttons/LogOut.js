import { useState } from "react";
import { Redirect } from "react-router-dom";
import { LogOut } from "../../Assets/Icons";
import { ProfilePhoto } from "../../Assets/Images";

import "../../Widgets/SideBar/SideBar.css";

const LogOutButton = () => {
  const [loggedOut, setLoggedOut] = useState(false);
  const handleLogOut = (props) => {
    localStorage.removeItem("token");
    setLoggedOut(true);
  };
  if (loggedOut) {
    return <Redirect to="/" push={true} />;
  }
  return (
    <div>
      <div className="nav-link" id="profile">
        <img src={ProfilePhoto} alt="" className=" btn avatar" />
        <button type="button" className="btn logOutBtn" onClick={handleLogOut}>
          <img src={LogOut} alt="" />
        </button>
        <p id="logout">Logout</p>
      </div>
    </div>
  );
};

export { LogOutButton };
