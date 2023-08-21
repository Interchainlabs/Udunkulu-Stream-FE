import './Preview.css';
import './Upload.css';
import './UploadingPage.css';
import {NavLink} from 'react-router-dom';
import {AlbumImage} from '../../../Assets/Images';
import {Button} from '../../../Components';

const Preview =(props)=>{
    const formInfo = props.formInfo
    console.log(formInfo)
        var image = "URL.createObjectURL(formInfo.albumCover"
        console.log(image)
    return(
        <>
            <div className="row p-1 d-flex justify-content-space-evenly preview-row spacer">
                <div className="col general-details">
                    <div><text><strong>Album:</strong>{"formInfo.title"}</text></div>
                    <div><text><strong>Released:</strong> {"formInfo.released"}</text></div>
                    <div className="card" id="songCard">
                        <div className="card-body">
                            <img className="innerAlbumCoverImage" src={AlbumImage} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="col song-details">
                    <div id="songName">{"formInfo.song.name"}</div>
                </div>
            </div>

            <div id="buttonDiv">

                  <Button variant="back" size={"sm"} onClick={console.log("clicked")}>Back</Button>



                    <Button variant="next" size={"sm"} type="submit">Finish</Button>

            </div>
        </>
    );
}

export {Preview};
