import { UdunkuluVector } from "../../../Assets/Images";
import { loadsearchResults } from "../../../store/searchSlice";
// import { SearchResult } from "./SearchResult";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SearchResult from "./SearchResult";

const Search_page = (props) => {
  console.log(props);
  return (
    <div>
      {props.searchResults &&
      props.searchResults.artists &&
      props.searchResults.artists &&
      props.searchResults.artists ? (
        <SearchResult
          artists={props.searchResults.artists}
          songs={props.searchResults.songs}
          albums={props.searchResults.albums}
        />
      ) : (
        <div className="search-container">
          <img src={UdunkuluVector} alt="Udunkulu" />
          <text className="mx-auto" id="text">
            Contents will appear when you search them
          </text>
        </div>
      )}
    </div>
  );
};

Search_page.propTypes = {
  loadsearchResults: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  searchResults: state.app.searchResults.list,
});
export default connect(mapStateToProps, {
  loadsearchResults,
})(Search_page);
