import {useState} from 'react';
import '../DashBoard/Upload.css';
import './UploadingPage.css';
import {NavLink} from 'react-router-dom';
import {Button} from '../../../Components';

const UploadingPage=(props)=>{

    const [progress, setProgress] = useState(0);

    return(
        <>
           {/* delected add more files section : its not needed for version 1 */}

            <section id="uploadStatus" className="spacer">
                <div className="TrackInfo">{"Name"}</div>
                <div className="TrackStatus d-flex" >
                  <div id="size"><text>Uploading...</text> + {"123"}Mb</div>
                  {/* <i className="fas fa-trash"></i> */}
                </div>

            <div className="progress">
                <div
                    className="progress-bar progress-bar-info"
                    role="progressbar"
                    ariavaluenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{width: progress + "%"}}
                    id= "progress"
                >
                    {progress}%
                </div>
            </div>
            </section>

            <div id="buttonDiv">
                <NavLink to="/upload-your-music" className="nav-link">
                    <Button variant="back" size={"sm"} onClick={props.prev}>Back</Button>
                </NavLink>
                <NavLink to="/preview-song-upload" className="nav-link">
                    <Button variant="next" size={"sm"} onClick={props.next}>Next</Button>
                </NavLink>
            </div>
        </>
    );
}
export {UploadingPage};
