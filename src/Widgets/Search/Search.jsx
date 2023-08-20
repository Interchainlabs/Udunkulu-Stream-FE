import React, { useState } from "react";
import { Button } from "../../Components";
import "./Search.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadsearchResults } from "../../store/searchSlice";

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState(null);
  return (
    <div>
      <nav className="navbar m-0" id="search-bar">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            props.loadsearchResults(searchQuery);
          }}
          className="search-form"
          id="searchForm"
        >
          <div className="input-group mb-4  my-3" id="searchArtist">
            <div className=" border-0">
              <span className="btn" id="button-addon4">
                <i className="fa fa-search"></i>
              </span>
            </div>
            <input
              type="search"
              placeholder="Search"
              className="form-control border-0"
              size="50"
              id="artistInput"
              onChange={(e) => {
                e.preventDefault();
                setSearchQuery(e.target.value);
              }}
            />
          </div>
        </form>
        <Button
          variant="sign-in"
          size={"sm"}
          data-target={"#authModal"}
          data-toggle="modal"
          style={{ marginRight: "1.1em" }}
        >
          Sign In
        </Button>
      </nav>
    </div>
  );
};
Search.propTypes = {
  loadsearchResults: PropTypes.func.isRequired,
};

export default connect(null, {
  loadsearchResults,
})(Search);
