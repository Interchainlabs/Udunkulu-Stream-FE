import './ArtistHomePage.css'
import { Human1, Human2, MusicNotes } from '../../../Assets/Icons'
import { Trend1, Trend2 } from '../../../Assets/Trending'
import SongCard from '../../../Components/SongCard/SongCard'

const ArtistHomePage = (props) => {
  const songs = [
    {
      _id: 1,
      artist: {
        stageName: 'Davido',
      },
      album: { coverArt: Trend1 },
      title: 'Gobe',
      noOfPlays: 20000,
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
    {
      _id: 2,
      artist: {
        stageName: 'Davido',
      },
      album: { coverArt: Trend2 },
      title: 'Gobe',
      noOfPlays: 20000,
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
  ]
  return (
    <div>
      <div className="row pb-5 innerPadding">
        <div className="col-3">
          <div className="card high card-dashboard" id="Profile">
            <p>Profile</p> <img src={Human1} alt="" />
          </div>
        </div>
        <div className="col-9">
          <form action="" className="search-form" id="">
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
              />
            </div>
          </form>
          <p className="header-text">Collections (65)</p>
          <div className="row">
            {songs.map((song) => (
              <div className="col-md-3">
                <SongCard song={song} songs={songs} key={songs._id} class />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { ArtistHomePage }
