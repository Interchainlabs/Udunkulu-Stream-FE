import React from 'react';
import { MusicAvatar} from '../../Assets/Images';
import './MusicController.css';


const MusicController = () => {
    return(
        <div className="container-fluid-music-container">
            <div className="progress" id="player">
                <div className="progress-bar"  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"  id="player-bar"></div>
                <div className="circle"></div>
            </div>
  
            <div className="controller">

                <div className="volume">
                    <div><button className="btn"><i className="fas fa-volume-up"></i></button></div>
                    <div className="progress" id="volume">
                        <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"  id="volume-bar"></div>
                        <div className="circle"></div>
                    </div>
                </div>
     
                <div className="player-buttons">
                    <button className="btn  " ><i className="fas fa-backward"></i></button>
                    <button  className="btn   "><i className="fas fa-play"></i></button>
                    <button  className="btn  "><i className="fas fa-forward"></i></button>
                </div>

                <div className="music-article">
                    <div className="music-img"><img src={MusicAvatar} alt=""/></div>
                    <div className="music detail"><text>Fem</text><br/><text>Davido</text></div>
                </div> 
            </div> 
        </div>
    );
}

export{MusicController};