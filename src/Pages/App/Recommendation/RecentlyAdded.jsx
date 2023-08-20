import React from "react";
/*TODO @Abayomi 
can you please explain the use of the trend, from what I understand the trend 
contains resources - its not clear if it is an artist, song, or album resource
However How We envision it is we fetch a resource object from the api, the resoruce objects is a collections of songs
we can either sort the songs on the frontend but preferable on the backend
NB: Songs.all.order(songs_played_count_at_time_frame: ASC)
NB: Artist.all.order(songs_played_count_at_time_frame: ASC)
NB: Albulm.all.order(songs_played_count_at_time_frame: ASC)
TODO change resource image tag to image file
*/
import {
  Trend1,
  Trend2
} from "../../../Assets/Trending";
import SongCard from "../../../Components/SongCard/SongCard";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadNewSongs } from "../../../store/searchSlice";

// TODO fetch the music resoutce into an array
// This is a placeholder for now
// TODO BLOCKCHAIN VITAL: THIS SHOULD BE FETCH FROM THE FILECOIN API  USING SOLIDITY 
const songs = [
  {
    _id: 1,
    artist: {
      stageName: "Davido",
    },
    album: { coverArt: Trend1 },
    title: "Gobe",
    noOfPlays: 20000,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    _id: 2,
    artist: {
      stageName: "Davido",
    },
    album: { coverArt: Trend2 },
    title: "Gobe",
    noOfPlays: 20000,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
];
const new_songs = (<div id="_RecentlyAdded">
<p className="header-text">New Songs</p>
<div className="row pt-3 m-0">
  {songs.map((song) => (
    <SongCard song={song} songs={songs} key={songs._id} />
  ))}
</div>
</div>);
const new_artists = (<div className="_RecentlyAdded">
<p className="header-text">New Atrists</p>
<div className="row pt-3 m-0">
  {songs.map((song) => (
    <SongCard song={song} songs={songs} key={songs._id} />
  ))}
</div>
</div>);
const new_albums = (<div className="_RecentlyAdded">
<p className="header-text">New Albums</p>
<div className="row pt-3 m-0">
  {songs.map((song) => (
    <SongCard song={song} songs={songs} key={songs._id} />
  ))}
</div>
</div>);
const RecentlyAdded = () => {
  return (
    <>
    {new_songs}
    {new_artists}
    {new_albums}
    </>
  );
};
RecentlyAdded.propTypes = {
  loadNewSongs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  songList: state.app.searchResults.nowPlayingList,
});
export default connect(mapStateToProps, {
  loadNewSongs,
})(RecentlyAdded);
