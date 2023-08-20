import React from "react";
import { NowPlaying } from "../Pages";
import { NavBar, Sidebar } from "../Widgets";
import "./App_layout.css";

export function App_layout(props) {
  const childElement  = props.children
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block  ratio-sidebar">
          <div className="sidebar-sticky">
            <div className="nav flex-column">
              {/* TODO if artist is present render artist sidebar */}
              <Sidebar />
            </div>
          </div>
        </nav>{" "}
        <main
          role="main"
          className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 ratio-main"
        >
          {/* <!-- DYNAMIC NAVBAR --> */}

          <NavBar />

          {/* SPACER HERE */}
          <div id="spacer"></div>

          {/* <!-- DYNAMIC CONTENT --> */}
          <div className="lowerContainer">
           
            {childElement}
          </div>
          {/* sdsd */}

        </main>
      </div>
    </div>
  );
}
