import "./NavBar.css";
import { Button } from "../../Components";
import { NavLink, Link } from "react-router-dom";
import { Authentication } from "../../Pages";

const ArtistNavBar = () => {
  return (
    <div>
      <nav className="navbar m-0" id="search-bar">
        <form action=""
            onSubmit={(e) => {
                e.preventDefault();
            }}
            className="search-form"
            id="searchForm"
        > 
            <div className="input-group mb-4  my-3" id="searchArtist">
              <div className=" border-0">
                <span className="btn"  id="button-addon4"><i className="fa fa-search"></i></span>
              </div>
              <input type="search" placeholder="Search"  className="form-control border-0" size="50" id="artistInput"/>
                
            </div>
        </form>  
      </nav>

      <Authentication />
    </div>
  );
};

export { ArtistNavBar };
