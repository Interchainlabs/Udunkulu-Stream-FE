import React from "react";
import { ArtistNavBar, ArtistSidebar } from "../Widgets";
import "./App_layout.css";

export function ArtistLayout(props) {
  const childElement  = props.children
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block  sidebar ratio-sidebar">
          <div className="sidebar-sticky">
            <div className="nav flex-column">
              {/* TODO if artist is present render artist sidebar */}
              <ArtistSidebar />
            </div>
          </div>
        </nav>{" "}
        <main
          role="main"
          className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 ratio-main"
        >
          {/* <!-- DYNAMIC NAVBAR --> */}

          {/* <ArtistNavBar/> */}

          {/* SPACER HERE */}
          <div id="spacer"></div>

          {/* <!-- DYNAMIC CONTENT --> */}
          <div className="">
            {childElement}
          </div>
        </main>
      </div>
    </div>
  );
}
