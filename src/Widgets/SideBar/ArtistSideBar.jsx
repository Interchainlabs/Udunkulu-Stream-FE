 import { ProfilePhoto, UdunkuluLogo } from "../../Assets/Images";
import { Home, Upload } from "../../Assets/Icons";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import { LogOutButton } from "../../Components/Buttons/LogOut";

const ArtistSidebar = () => {
  const isLoggedIn = localStorage.getItem("token");

  return (
      <section>
        <div className="sidebar" id="sidebar-wrapper">
          <NavLink to="/dashboard" className="nav-link">
            <img
              className="sidebar-header"
              src={UdunkuluLogo}
              alt="Udunkulu"
              href="/"
            />
          </NavLink>

          <ul className="list-group flex-column d-inline-block list-group-sidebar">
            <li className="list-item">
              <NavLink to="/dashboard" className="nav-link">
                <button type="button" className="btn btn-dark" id="button-border">
                  <img src={Home} alt="" />
                </button>
                <p>Home</p>
              </NavLink>
            </li>

            <li className="list-item">
              <NavLink to="/upload-your-music" className="nav-link">
                <button type="button" className="btn btn-dark" id="button-border">
                  <img src={Upload} alt="" />
                </button>
                <p>Upload</p>
              </NavLink>
            </li>
          </ul>
          <ul className="list-group flex-column d-inline-block list-group-sidebar pad-top">
            <li className="list-item" id="listItem">
              {isLoggedIn ? <LogOutButton /> : null}
            </li>
          </ul>
        </div>
      </section>
  );
};

export { ArtistSidebar };
