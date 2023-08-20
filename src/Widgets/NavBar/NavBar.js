import "./NavBar.css";
import { Button } from "../../Components";
import { NavLink } from "react-router-dom";
import { Authentication } from "../../Pages";
import Search from "../Search/Search";

const NavBar = (props) => {
  const isLoggedIn =localStorage.getItem("token");
  const url = window.location.pathname.substring(1);
  const navBar = (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top ml-50px">
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav flex-fill" id="navbar-list">
            <li className="nav-item">
              <NavLink to="/trending" className="nav-link">
                Trending
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="select-mood" className="nav-link">
                Mood/Genre
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="recently-added" className="nav-link">
                Recently Added
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="top-artist" className="nav-link">
                Top Artists
              </NavLink>
            </li>
          </ul>
          {isLoggedIn ? null :
            <Button
              variant="sign-in"
              size={"sm"}
              data-target={"#authModal"}
              data-toggle="modal"
            >
              Sign In
            </Button>
          }
        </div>
      </nav>
    </>
  );

  function renderConditionalNavBar() {
    if (url === ("search" || "results")) {
      return <Search />;
    } else {
      return navBar;
    }
  }
  let nav = renderConditionalNavBar();
  return (
    <div>
      {nav}
      <Authentication />
    </div>
  );
};

export { NavBar };
