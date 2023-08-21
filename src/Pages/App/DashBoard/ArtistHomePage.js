import './ArtistHomePage.css'
import { Avatar} from '../../../Assets/Icons'
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
        <div className="col-xl-4 col-sm-6 mb-5">
          <div className="profile-card rounded shadow-sm py-0 pb-3 px-4 text-center rounded-1 border-0">
            <img
              src={Avatar}
              alt=""
              width="100"
              className="img-fluid rounded-circle mb-5 img-thumbnail shadow-sm"
            />
            <p className="small text-uppercase text-muted mb-4">
              1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
            </p>
            <div className="d-flex justify-content-center text-muted metrics py-2 pt-3">
              <div className="item d-line">
                <h5 className="unit">235</h5>
                <span className="value">Songs</span>
              </div>
              <div className="item d-line">
                <h5 className="unit">04</h5>
                <span className="value">Albums</span>
              </div>
              <div className="item d-line">
                <h5 className="unit">€100</h5>
                <span className="value">Royalties</span>
              </div>
            </div>
            <button className="btn btn-upload mt-5 mb-3 w-100">
              Upload a song
            </button>
          </div>
        </div>

        <div className="col-8">
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
