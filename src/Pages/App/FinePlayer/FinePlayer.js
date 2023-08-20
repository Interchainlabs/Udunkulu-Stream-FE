import "./FinePlayer.css";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadNewSongs } from "../../../store/searchSlice";

const FinePlayer = (props) => {
  const [bgImg, setBgImg] = useState(null);

  const reformed = [];
  props.songList.forEach((song) => {
    reformed.push({
      name: song.title,
      musicSrc: song.url,
      cover: song.album.coverArt,
      singer: song.artist.stageName,
    });
  });
  console.log(props.songList);
  console.log(reformed);
  return (
    <div className="playBox">
      <img src={bgImg} height="100%" alt="" />
      <ReactJkMusicPlayer
        audioLists={reformed}
        remember="true"
        glassBg="true"
        showLyric="true"
        defaultPosition={{ top: "50%", left: "50%" }}
        mode="full"
        renderAudioTitle={(audioInfo, isMobile) => {
          console.log("audioInfo: ", audioInfo, isMobile);
          return (
            <>
              <a href="#">{audioInfo.name}</a>
              <span className="tag">Hot</span>
            </>
          );
        }}
        onAudioPlay={(audioInfo) => {
          setBgImg(audioInfo.cover);
        }}
      />
    </div>
  );
};
FinePlayer.propTypes = {
  loadNewSongs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  songList: state.app.searchResults.nowPlayingList,
});
export default connect(mapStateToProps, {
  loadNewSongs,
})(FinePlayer);
